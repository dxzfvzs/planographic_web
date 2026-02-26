import React from "react";
import NavButton from "../components/button/nav-button";
import { ContentMap } from "../content/content";
import type { Subject } from "../utils/subjects";
import { subjects } from "../utils/subjects";
import { useParams } from "react-router-dom";

export default function SubjectPage() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();

  const subjectKey = (Object.keys(subjects) as Subject[]).find(
    key => subjects[key].url === subjectSlug
  );

  const neutralColorHex = "#404040";
  const neutralColor = localStorage.getItem("neutralColor");

  if (!subjectKey) return <p>Předmětová stránka nenalezena</p>;

  const config = subjects[subjectKey];
  const color = neutralColor ? neutralColorHex : config.color;
  const contentSections = ContentMap[subjectKey] || [];

  return (
    <>
      <section style={{ "--subject-color": color } as React.CSSProperties} className="article-background">
        <h1>{config.cz}</h1>
        <p className="intro">{config.intro}</p>
      </section>

      {contentSections.map((section) => (
        <section
          key={section.sectionSlug}
          style={{ "--subject-color": color } as React.CSSProperties}
          className="article-background link-section"
        >
          <h2>{section.section}</h2>
          <p>{section.intro}</p>
          <div className="flex-gap">
            {section.articles.map((article) => (
              <NavButton
                key={article.url}
                url={`/${config.url}/${section.sectionSlug}/${article.url}`}
                text={article.name}
                color={color}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}