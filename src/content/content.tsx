import { Subject } from "../utils/subjects";
import { polygraphyContent } from "./polygraphy-content";

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


export const ContentMap: Readonly<Record<Subject, ContentSection[]>> = {
  Czech: [], English: [], Materials: [], Polygraphy: polygraphyContent, Technology: []
}