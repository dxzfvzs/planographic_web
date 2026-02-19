import React from "react";
import { Subject, subjects } from "../utils/subjects";
import { useParams } from "react-router-dom";

interface ArticleProps {
  subject: Subject
}

export default function Article({ subject }: ArticleProps) {
  const config = subjects[subject];
  const { sectionSlug, articleSlug } = useParams();

  return (
    <>
      <section>
        <h1>{config.cz}</h1>
        {sectionSlug}/{articleSlug}
      </section>
    </>
  );
}
