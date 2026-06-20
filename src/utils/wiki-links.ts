import { Subject, subjects } from "./subjects";
import { ContentMap } from "../content/content";

interface ResolvedLink {
  name: string;
  href: string;
  slug: string;
}

function resolveWikiLink(slug: string, currentSubjectKey: Subject): ResolvedLink | null {
  const parts = slug.trim().split("/");

  let subjectKey: Subject = currentSubjectKey;
  let sectionSlug: string;
  let articleSlug: string;

  if (parts.length === 2) {
    [sectionSlug, articleSlug] = parts;
  } else if (parts.length === 3) {
    const found = (Object.entries(subjects) as [Subject, (typeof subjects)[Subject]][]).find(
      ([, s]) => s.url === parts[0]
    );
    if (!found) return null;
    subjectKey = found[0];
    sectionSlug = parts[1];
    articleSlug = parts[2];
  } else {
    return null;
  }

  const section = ContentMap[subjectKey]?.find(s => s.sectionSlug === sectionSlug);
  const article = section?.articles.find(a => a.url === articleSlug);
  if (!article) return null;

  return {
    name: article.name,
    href: `#/${subjects[subjectKey].url}/${sectionSlug}/${articleSlug}`,
    slug,
  };
}

const WIKI_LINK_RE = /\[\[([^\]]+)]]/g;

export interface RelatedArticle {
  name: string;
  href: string;
}

export function processWikiLinks(
  markdown: string,
  currentSubjectKey: Subject
): { processed: string; related: RelatedArticle[] } {
  const related: RelatedArticle[] = [];
  const seen = new Set<string>();

  const processed = markdown.replace(WIKI_LINK_RE, (_, slug: string) => {
    const resolved = resolveWikiLink(slug.trim(), currentSubjectKey);
    if (!resolved) return `[[${slug}]]`;

    if (!seen.has(resolved.slug)) {
      seen.add(resolved.slug);
      related.push({ name: resolved.name, href: resolved.href });
    }

    return `[${resolved.name}](${resolved.href})`;
  });

  return { processed, related };
}
