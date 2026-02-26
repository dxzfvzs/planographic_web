import React from "react";
import NavButton from "../components/button/nav-button";
import { ContentMap } from "../content/content";
import { Subject, subjects } from "../utils/subjects";
import { useParams } from "react-router-dom";

export default function SubjectPage() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();

  const subjectKey = (Object.keys(subjects) as Subject[]).find(
    key => subjects[key].url === subjectSlug
  );

  if (!subjectKey) return <p>Předmětová stránka nenalezena</p>;

  const config = subjects[subjectKey];
  const contentSections = ContentMap[subjectKey] || [];

  return (
    <>
      <section style={{ "--subject-color": config.color } as React.CSSProperties}>
        <h1>{config.cz}</h1>
        <p>{config.intro}</p>
      </section>

      {contentSections.map((section) => (
        <section key={section.sectionSlug}>
          <h2>{section.section}</h2>
          <p>{section.intro}</p>
          <div className="flex-gap">
            {section.articles.map((article) => (
              <NavButton
                key={article.url}
                url={`/${config.url}/${section.sectionSlug}/${article.url}`}
                text={article.name}
                color={config.color} // per-subject color
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}