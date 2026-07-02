import type { ContentSection } from "./content";

export const czechContent: ContentSection[] = [
  {
    section: "Rozbory knížek",
    sectionSlug: "rozbory",
    intro: `Literární rozbory vybraných děl světové a české literatury.`,
    articles: [
      { name: "1984", url: "1984", done: true },
      { name: "451° Fahrenheita", url: "451-fahrenheita", done: true },
      { name: "Alchymista", url: "alchymista", done: true },
      { name: "Konec civilizace", url: "konec-civilizace", done: true },
      { name: "Proměna", url: "promena", done: true },
      { name: "Spalovač mrtvol", url: "spalovac-mrtvol", done: true },
    ]
  },
  {
    section: "Zápisky",
    sectionSlug: "zapisky",
    intro: `Studijní poznámky k literární teorii a vývoji literatury.`,
    articles: [
      { name: "Počátky literatury", url: "pocatky-literatury", done: true },
      { name: "Figury a tropy", url: "figury-a-tropy", done: true }
    ]
  }
];
