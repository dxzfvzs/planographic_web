export interface Article {
  name: string;
  url: string; // just the last bit of the path, final slug
}

export interface ContentSection {
  section: string;
  sectionSlug: string; // used for URL generation
  intro: string; // section description
  articles: Article[];
}
