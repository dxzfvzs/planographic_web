import React, { useLayoutEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { RelatedArticle } from "../../utils/wiki-links";
import "./article.css"

const REVEAL_THRESHOLD_PX = () => Math.round(window.innerHeight * 0.25);

// Groups h2 sections (and h3 subsections within them) into wrapper divs
// so the whole block can be blurred/revealed as a unit.
function sectionWrapper() {
  return (tree: any) => {
    const withH2 = groupByHeading(tree.children, "h2", "article-section");
    for (const node of withH2) {
      if (isDiv(node, "article-section")) {
        node.children = groupByHeading(node.children, "h3", "article-subsection");
      }
    }
    tree.children = withH2;
  };
}

function groupByHeading(nodes: any[], tag: string, className: string): any[] {
  const output: any[] = [];
  let current: any[] | null = null;

  for (const node of nodes) {
    if (node.type === "element" && node.tagName === tag) {
      if (current) output.push(wrapAs(className, current));
      current = [node];
    } else {
      if (current) current.push(node);
      else output.push(node);
    }
  }

  if (current) output.push(wrapAs(className, current));
  return output;
}

function isDiv(node: any, className: string) {
  return (
    node.type === "element" &&
    node.tagName === "div" &&
    node.properties?.className?.includes(className)
  );
}

function wrapAs(className: string, children: any[]) {
  return {
    type: "element",
    tagName: "div",
    properties: { className: [className] },
    children,
  };
}

interface ArticleProps {
  content?: string,
  headline: string,
  subject: string,
  related?: RelatedArticle[],
}

export default function Article({ content, headline, subject, related }: ArticleProps) {
  const articleRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const article = articleRef.current;
    if (!article) return;

    const all = article.querySelectorAll<HTMLElement>(
      ".article-section, .article-subsection"
    );
    if (!all.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("locked");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: `0px 0px -${REVEAL_THRESHOLD_PX()}px 0px`, threshold: 0 }
    );

    all.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        section.classList.add("locked");
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [content]);

  return (
    <section className="article-background">
      <h1 className="article-headline">
        <span className="article-headline--subject">{subject} {">"} </span> {headline}
      </h1>
      <article className="article-content" ref={articleRef}>
        <ReactMarkdown rehypePlugins={[sectionWrapper] as any}>
          {content}
        </ReactMarkdown>
      </article>
      {related && related.length > 0 && (
        <div className="article-related">
          <p className="article-related__label">Související články</p>
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
