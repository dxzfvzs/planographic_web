import type { ContentSection } from "./content";

export const czechContent: ContentSection[] = [
  {
    section: "Rozbory knížek",
    sectionSlug: "rozbory",
    intro: `Literární rozbory vybraných děl světové a české literatury.`,
    articles: [
      { name: "1984", url: "1984", done: false },
      { name: "451° Fahrenheita", url: "451-fahrenheita", done: false },
      { name: "Alchymista", url: "alchymista", done: false },
      { name: "Konec civilizace", url: "konec-civilizace", done: false },
      { name: "O myších a lidech", url: "o-mysich-a-lidech", done: false },
      { name: "Proměna", url: "promena", done: false },
      { name: "Robinson Crusoe", url: "robinson-crusoe", done: false },
      { name: "Sluha dvou pánů", url: "sluha-dvou-panu", done: false },
      { name: "Spalovač mrtvol", url: "spalovac-mrtvol", done: false },
      { name: "Továrna na absolutno", url: "tovarna-na-absolutno", done: false },
      { name: "Válka s mloky", url: "valka-s-mloky", done: false }
    ]
  },
  {
    section: "Zápisky",
    sectionSlug: "zapisky",
    intro: `Studijní poznámky k literární teorii a vývoji literatury.`,
    articles: [
      { name: "Počátky literatury", url: "pocatky-literatury", done: false },
      { name: "Figury a tropy", url: "figury-a-tropy", done: false }
    ]
  }
];
