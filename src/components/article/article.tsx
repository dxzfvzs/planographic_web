import React from "react";
import ReactMarkdown from "react-markdown";
import { RelatedArticle } from "../../utils/wiki-links";
import "./article.css"

interface ArticleProps {
  content?: string,
  headline: string,
  subject: string,
  related?: RelatedArticle[],
}

export default function Article({ content, headline, subject, related }: ArticleProps) {
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
      {related && related.length > 0 && (
        <div className="article-related">
          <p className="article-related__label">Viz také</p>
          <div className="article-related__links">
            {related.map(r => (
              <a key={r.href} href={r.href} className="article-related__link">
                {r.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}