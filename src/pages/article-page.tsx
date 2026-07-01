import React, { useEffect, useMemo, useState } from "react";
import { Subject, subjects } from "../utils/subjects";
import { useParams } from "react-router-dom";
import Article from "../components/article/article";
import { ContentMap } from "../content/content";
import { neutralColorHex, useNeutralColor } from "../hooks/useNeutralColor";
import PageNav from "../components/page-nav/page-nav";
import { processWikiLinks } from "../utils/wiki-links";
import type { SubjectStyle } from "../utils/css";

const markdownModules = import.meta.glob(
  "../content/markdown/**/*.md",
  { query: "?raw", import: "default" }
);

export default function ArticlePage() {
  const { subjectSlug, sectionSlug, articleSlug } = useParams<{
    subjectSlug: string;
    sectionSlug: string;
    articleSlug: string;
  }>();

  const [content, setContent] = useState<string | null>(null);
  const [neutralColor, setNeutralColor] = useNeutralColor();

  const subjectKey = (Object.keys(subjects) as Subject[]).find(
    key => subjects[key].url === subjectSlug
  );

  useEffect(() => {
    let cancelled = false;

    async function loadArticle() {
      setContent(null);
      const key = `../content/markdown/${subjectSlug}/${sectionSlug}/${articleSlug}.md`;
      const loader = markdownModules[key];
      if (!loader) {
        if (!cancelled) setContent("# Článek nebyl nalezen");
        return;
      }
      try {
        const text = await loader() as string;
        if (!cancelled) setContent(text);
      } catch {
        if (!cancelled) setContent("# Článek nebyl nalezen");
      }
    }

    void loadArticle();
    return () => {
      cancelled = true;
    };
  }, [subjectSlug, sectionSlug, articleSlug]);

  const { processed: processedContent, related } = useMemo(
    () => subjectKey && content !== null ? processWikiLinks(content, subjectKey) : {
      processed: content ?? "",
      related: []
    },
    [content, subjectKey]
  );

  if (!subjectKey) return <p>Předmětová stránka nenalezena</p>;

  const config = subjects[subjectKey];
  const color = neutralColor ? neutralColorHex : config.color;
  const headline =
    ContentMap[subjectKey]
      ?.find(s => s.sectionSlug === sectionSlug)
      ?.articles.find(a => a.url === articleSlug)?.name
    ?? config.cz;

  return (
    <div className="flex-col" style={{ minHeight: '100vh', "--subject-color": color } as SubjectStyle}>
      <PageNav backUrl={`/${config.url}`} onColorToggle={() => setNeutralColor(prev => !prev)}
               isNeutral={neutralColor}/>
      {content !== null && (
        <div>
          <Article
            content={processedContent}
            related={related}
            headline={headline}
            subject={config.cz}
          />
        </div>
      )}
      {content !== null && (
        <div className="note">
          Poznámka: Textů je hodně. Pro urychlení psaní byla použita pomoc umělá inteligence (ChatGPT, Perplexity), a to
          například pro odchycení chyb a překlepů, pomocí se strukturou textu, někde s formátováním, apod. Výsledek byl
          ale vždy ještě nakonec okontrolován a upraven člověkem.
        </div>
      )}
    </div>
  );
}
