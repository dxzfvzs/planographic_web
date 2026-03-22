import type { ContentSection } from "./content";

export const polygraphyContent: ContentSection[] =
  [
    {
      section: "Základy polygrafie",
      sectionSlug: "basics",
      intro: "Základní tiskové techniky a jejich přehled.",
      articles: [
        { name: "Přehled tiskových technik", url: "prehled", done: true },
        { name: "Rozdělení tiskových technik", url: "rozdeleni", done: true },
        { name: "Přímé tiskové techniky", url: "primy-tisk" },
        { name: "Nepřímé tiskové techniky", url: "neprimy-tisk" },
        { name: "Strojní vybavení kniháren", url: "strojni-vybaveni", done: true },
        { name: "Významné osobnosti polygrafie", url: "osobnosti", done: true },
      ]
    },
    {
      section: "Polygrafická výroba",
      sectionSlug: "production",
      intro: "Procesy a workflow polygrafické výroby.",
      articles: [
        { name: "Fáze polygrafické výroby", url: "faze-vyroby" },
        { name: "Předvýrobní činnost podniku", url: "predvyrobni-cinnost" },
        { name: "Zušlechťování polygrafických výrobků", url: "zuslechtovani" },
        { name: "Dokončující zpracování tiskovin", url: "dokoncujici-zpracovani" },
        { name: "Členění materiálů pro polygrafickou výrobu", url: "cleneni-materialu" },
      ]
    },
    {
      section: "Jednotlivé tiskové techniky",
      sectionSlug: "techniques",
      intro: "Detailní popis jednotlivých tiskových technik.",
      articles: [
        { name: "Tisk z výšky", url: "tisk-z-vysky", done: true  },
        { name: "Tisk z hloubky", url: "tisk-z-hloubky", done: true },
        { name: "Tisk z plochy", url: "tisk-z-plochy", done: true },
        { name: "Knihtisk", url: "knihtisk", done: true },
        { name: "Sítotisk", url: "sitotisk", done: true  },
        { name: "Digitální tiskové techniky", url: "digitalni-tisk" },
      ]
    },
    {
      section: "Knihařství",
      sectionSlug: "bookbinding",
      intro: "Vazby, materiály a technologie knihařství.",
      articles: [
        { name: "Knižní vazba a její části", url: "knizni-vazba" },
        { name: "Historický vývoj knižní vazby, výrobní náplň knihařství", url: "historicky-vyvoj" },
        { name: "Rozdělení knižních vazeb", url: "rozdeleni-vazeb" },
        { name: "Měkké knižní vazby", url: "mekke-vazby" },
        { name: "Tuhé knižní vazby", url: "tuhe-vazby" },
        { name: "Formáty papíru", url: "formaty-papiru" },
        { name: "Materiály používané v knihařské výrobě", url: "materialy-kniharina" },
      ]
    }
  ]
;