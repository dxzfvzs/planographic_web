import type { ContentSection } from "./content";

// 1. Tisk z výšky
// 3. Rozdělení tiskových technik
// 5. Polygrafická výroba
// 7. Přímé tiskové techniky
// 9. Strojní vybavení kniháren
// 11. Tisk z plochy
// 13. Nepřímé tiskové techniky
// 17. Rozdělení knižních vazeb
// 19. Měkké knižní vazby
// 21. Tuhé knižní vazby
// 23. Tisk z hloubky
// 25. Sítotisk

export const polygraphyContent: ContentSection[] =
  [
    {
      section: "Tiskové techniky obecně",
      sectionSlug: "general",
      intro: "Základní tiskové techniky a jejich přehled.",
      articles: [
        { name: "Rozdělení tiskových technik", url: "rozdeleni-tiskovych-technik" }, // 3
        { name: "Strojní vybavení kniháren", url: "strojni-vybaveni-kniharen" }, // 9
      ]
    },
    {
      section: "Jednotlivé tiskové techniky",
      sectionSlug: "techniques",
      intro: "Detailní popis jednotlivých tiskových technik.",
      articles: [
        { name: "Tisk z výšky", url: "tisk-z-vysky" }, // 1
        { name: "Tisk z hloubky", url: "tisk-z-hloubky" }, // 23
        { name: "Tisk z plochy", url: "tisk-z-plochy" }, // 11
        { name: "Sítotisk", url: "sitotisk" }, // 25
        { name: "Digitální tisk*", url: "digitalni-tisk" },
      ]
    },
    {
      section: "Polygrafická výroba",
      sectionSlug: "production",
      intro: "Procesy a workflow polygrafické výroby.",
      articles: [
        { name: "Polygrafická výroba", url: "polygraficka-vyroba" }, // 5
        { name: "Přímé tiskové techniky", url: "primy-tisk" }, // 7
        { name: "Nepřímé tiskové techniky", url: "neprimy-tisk" }, // 13
      ]
    },
    {
      section: "Knižní vazby",
      sectionSlug: "bindings",
      intro: "Typy knižních vazeb a postupy jejich výroby.",
      articles: [
        { name: "Rozdělení knižních vazeb", url: "rozdeleni-vazeb" }, // 17
        { name: "Měkké knižní vazby", url: "mekke-vazby" }, // 19
        { name: "Tuhé knižní vazby", url: "tuhe-vazby" } // 21
      ]
    }
  ]
;