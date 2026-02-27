import React from "react";
import ReactMarkdown from "react-markdown";
import "./article.css"

interface ArticleProps {
  content?: string,
  headline: string,
  subject: string,
}

export default function Article({ content, headline, subject }: ArticleProps) {
  return (
    <section className="article-background">
      <h1 className="article-headline">
        <span className="article-headline--subject">{subject} {">"} </span> {headline}
      </h1>
      <article className="article-content">
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </article>
    </section>
  );
}