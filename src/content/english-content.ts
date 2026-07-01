import type { ContentSection } from "./content";

export const englishContent: ContentSection[] = [
  {
    section: "Countries and Cities",
    sectionSlug: "countries-cities",
    intro: "Overview of countries and major cities.",
    articles: [
      { name: "The Czech Republic", url: "czech-republic", done: true },
      { name: "Prague", url: "prague", done: true },
      { name: "The UK", url: "uk", done: true },
      { name: "London", url: "london", done: true },
      { name: "The USA", url: "usa", done: true },
      { name: "Canada", url: "canada", done: true },
      { name: "Australia, New Zealand", url: "australia-new-zealand", done: true }
    ]
  },
  {
    section: "Education and Daily Life",
    sectionSlug: "education-daily-life",
    intro: "Topics related to school, everyday routines, and daily life.",
    articles: [
      { name: "Education, Our school", url: "education-our-school", done: true },
      { name: "Everyday life", url: "everyday-life", done: true },
      { name: "Jobs", url: "jobs", done: true },
      { name: "Shopping and services", url: "shopping-services", done: true },
      { name: "Housing and living", url: "housing-living", done: true }
    ]
  },
  {
    section: "Culture and Leisure",
    sectionSlug: "culture-leisure",
    intro: "Topics on literature, holidays, cultural life, and lifestyle.",
    articles: [
      { name: "Literature", url: "literature", done: true },
      { name: "Holidays and festivals", url: "holidays-festivals", done: true },
      { name: "Cultural life", url: "cultural-life", done: true },
      { name: "Healthy lifestyle", url: "healthy-lifestyle", done: true },
      { name: "Food and meals", url: "food-meals", done: true }
    ]
  },
  {
    section: "Family and Global Awareness",
    sectionSlug: "family-global",
    intro: "Topics about family, relationships, and global issues.",
    articles: [
      { name: "Family and relationships", url: "family-relationships", done: true },
      { name: "Travelling", url: "travelling", done: true },
      { name: "Global problems", url: "global-problems", done: true }
    ]
  }
];
