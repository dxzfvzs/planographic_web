import React, { useEffect, useState } from "react";
import { Subject, subjects } from "../utils/subjects";
import { useParams } from "react-router-dom";
import Article from "../components/article/article";
import NavButton from "../components/button/nav-button";
import { ContentMap } from "../content/content";
import Button from "../components/button/button";

interface Params {
  subjectSlug: string;
  sectionSlug: string;
  articleSlug: string;
}

export default function ArticlePage() {
  const { subjectSlug, sectionSlug, articleSlug } = useParams<Record<keyof Params, string>>();

  const [content, setContent] = useState<string>("");
  const [neutralColor, setNeutralColor] = useState<boolean>(() => {
    const stored = localStorage.getItem("neutralColor");
    return stored === "true";
  });

  useEffect(() => {
    localStorage.setItem("neutralColor", String(neutralColor));
  }, [neutralColor]);

  useEffect(() => {
    async function loadArticle() {
      const path = `${process.env.PUBLIC_URL}/${subjectSlug}/${sectionSlug}/${articleSlug}.md`;
      try {
        const res = await fetch(path);
        if (!res.ok) throw new Error("Article not found");
        const text = await res.text();
        setContent(text);
      } catch (e) {
        setContent("# Článek nebyl nalezen");
      }
    }

    void loadArticle();
  }, [subjectSlug, sectionSlug, articleSlug]);

  const subjectKey = (Object.keys(subjects) as Subject[]).find(
    key => subjects[key].url === subjectSlug
  );

  if (!subjectKey) return <p>Předmětová stránka nenalezena</p>;

  const config = subjects[subjectKey];
  const neutralColorHex = "#404040";
  const subjectColorHex = config.color;
  const color = neutralColor ? neutralColorHex : subjectColorHex;

  return (
    <div className="flex-col">
      <div className="article__nav flex-gap">
        <NavButton url={`/${config.url}`} text={"Zpátky na výběr"} color={color}/>
        <Button text={"Změň barvu"} color={color} onClick={() => setNeutralColor(prev => !prev)}/>
      </div>
      <div style={{ "--subject-color": color } as React.CSSProperties} className="section--darker">
        <Article
          content={content}
          headline={
            ContentMap[subjectKey]
              ?.find(s => s.sectionSlug === sectionSlug)
              ?.articles.find(a => a.url === articleSlug)?.name
            ?? config.cz
          }
          subject={config.cz}
        />
      </div>
    </div>
  );
}
