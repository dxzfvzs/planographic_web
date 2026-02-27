import type { ContentSection } from "./content";

export const englishContent: ContentSection[] = [
  {
    section: "Countries and Cities",
    sectionSlug: "countries",
    intro: `Topics focused on English-speaking countries, their cities, culture and general background knowledge.`,
    articles: [
      { name: "Australia", url: "australia" },
      { name: "United Kingdom", url: "united-kingdom" },
      { name: "London", url: "london" },
      { name: "USA", url: "usa" },
      { name: "Canada", url: "canada" },
      { name: "Czech Republic", url: "czech-republic" },
      { name: "Prague", url: "prague" }
    ]
  },
  {
    section: "Printing",
    sectionSlug: "printing",
    intro: `Basic overview of major printing techniques and their principles.`,
    articles: [
      { name: "Intaglio", url: "intaglio" },
      { name: "Planographic Printing", url: "planographic-printing" },
      { name: "Relief Printing", url: "relief-printing" },
      { name: "Screen Printing", url: "screen-printing" }
    ]
  },
  {
    section: "Random Topics",
    sectionSlug: "random",
    intro: `General knowledge topics frequently used in English exams and presentations.`,
    articles: [
      { name: "Education Systems (CZ, ENG, USA)", url: "education-systems" },
      { name: "Internet + Radio + TV", url: "internet-radio-tv" },
      { name: "Internet", url: "internet" },
      { name: "Newspapers + Magazines", url: "newspapers-magazines" }
    ]
  }
];
