import type { ContentSection } from "./content";

export const englishContent: ContentSection[] = [
  {
    section: "Countries and Cities",
    sectionSlug: "countries-cities",
    intro: "Overview of countries and major cities.",
    articles: [
      { name: "The Czech Republic", url: "czech-republic", done: false },
      { name: "Prague", url: "prague", done: false },
      { name: "The UK", url: "uk", done: false },
      { name: "London", url: "london", done: false },
      { name: "The USA", url: "usa", done: false },
      { name: "Canada", url: "canada", done: false },
      { name: "Australia, New Zealand", url: "australia-new-zealand", done: false }
    ]
  },
  {
    section: "Education and Daily Life",
    sectionSlug: "education-daily-life",
    intro: "Topics related to school, everyday routines, and daily life.",
    articles: [
      { name: "Education, Our school", url: "education-our-school", done: false },
      { name: "Everyday life", url: "everyday-life", done: false },
      { name: "Jobs", url: "jobs", done: false },
      { name: "Shopping and services", url: "shopping-services", done: false },
      { name: "Housing and living", url: "housing-living", done: false }
    ]
  },
  {
    section: "Culture and Leisure",
    sectionSlug: "culture-leisure",
    intro: "Topics on literature, holidays, cultural life, and lifestyle.",
    articles: [
      { name: "Literature", url: "literature", done: false },
      { name: "Holidays and festivals", url: "holidays-festivals", done: false },
      { name: "Cultural life", url: "cultural-life", done: false },
      { name: "Healthy lifestyle", url: "healthy-lifestyle", done: false },
      { name: "Food and meals", url: "food-meals", done: false }
    ]
  },
  {
    section: "Family and Global Awareness",
    sectionSlug: "family-global",
    intro: "Topics about family, relationships, and global issues.",
    articles: [
      { name: "Family and relationships", url: "family-relationships", done: false },
      { name: "Travelling", url: "travelling", done: false },
      { name: "Global problems", url: "global-problems", done: false }
    ]
  }
];
