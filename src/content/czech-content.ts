import type { ContentSection } from "./content";

export const czechContent: ContentSection[] = [
  {
    section: "Rozbory knížek",
    sectionSlug: "rozbory",
    intro: `Literární rozbory vybraných děl světové a české literatury.`,
    articles: [
      { name: "1984", url: "1984" },
      { name: "451° Fahrenheita", url: "451-fahrenheita" },
      { name: "Alchymista", url: "alchymista" },
      { name: "Konec civilizace", url: "konec-civilizace" },
      { name: "O myších a lidech", url: "o-mysich-a-lidech" },
      { name: "Proměna", url: "promena" },
      { name: "Robinson Crusoe", url: "robinson-crusoe" },
      { name: "Sluha dvou pánů", url: "sluha-dvou-panu" },
      { name: "Spalovač mrtvol", url: "spalovac-mrtvol" },
      { name: "Továrna na absolutno", url: "tovarna-na-absolutno" },
      { name: "Válka s mloky", url: "valka-s-mloky" }
    ]
  },
  {
    section: "Zápisky",
    sectionSlug: "zapisky",
    intro: `Studijní poznámky k literární teorii a vývoji literatury.`,
    articles: [
      { name: "Počátky literatury", url: "pocatky-literatury" },
      { name: "Figury a tropy", url: "figury-a-tropy" }
    ]
  }
];
