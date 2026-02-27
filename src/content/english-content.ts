import type { ContentSection } from "./content";

export const englishContent: ContentSection[] = [
  {
    section: "Countries and Cities",
    sectionSlug: "countries-cities",
    intro: "Overview of countries and major cities.",
    articles: [
      { name: "The Czech Republic", url: "czech-republic" },
      { name: "Prague", url: "prague" },
      { name: "The UK", url: "uk" },
      { name: "London", url: "london" },
      { name: "The USA", url: "usa" },
      { name: "Canada", url: "canada" },
      { name: "Australia, New Zealand", url: "australia-new-zealand" }
    ]
  },
  {
    section: "Education and Daily Life",
    sectionSlug: "education-daily-life",
    intro: "Topics related to school, everyday routines, and daily life.",
    articles: [
      { name: "Education, Our school", url: "education-our-school" },
      { name: "Everyday life", url: "everyday-life" },
      { name: "Jobs", url: "jobs" },
      { name: "Shopping and services", url: "shopping-services" },
      { name: "Housing and living", url: "housing-living" }
    ]
  },
  {
    section: "Culture and Leisure",
    sectionSlug: "culture-leisure",
    intro: "Topics on literature, holidays, cultural life, and lifestyle.",
    articles: [
      { name: "Literature", url: "literature" },
      { name: "Holidays and festivals", url: "holidays-festivals" },
      { name: "Cultural life", url: "cultural-life" },
      { name: "Healthy lifestyle", url: "healthy-lifestyle" },
      { name: "Food and meals", url: "food-meals" }
    ]
  },
  {
    section: "Family and Global Awareness",
    sectionSlug: "family-global",
    intro: "Topics about family, relationships, and global issues.",
    articles: [
      { name: "Family and relationships", url: "family-relationships" },
      { name: "Travelling", url: "travelling" },
      { name: "Global problems", url: "global-problems" }
    ]
  }
];
