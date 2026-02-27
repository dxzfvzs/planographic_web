import type { ContentSection } from "./content";

export const technologyContent: ContentSection[] = [
  {
    section: "Text a písmo",
    sectionSlug: "text",
    intro: `Sekce zaměřená na typografii, práci s písmem a zpracování textu.`,
    articles: [
      { name: "Písmo a typografie", url: "pismo-a-typografie" },
      { name: "Zpracování textu", url: "zpracovani-textu" },
      { name: "Zpracování textu – 2. část", url: "zpracovani-textu-2" }
    ]
  },
  {
    section: "Barvy",
    sectionSlug: "colors",
    intro: `Základy kolorimetrie, správy barev a práce s barevnými prostory v polygrafii.`,
    articles: [
      { name: "Kolorimetrie a správa barev", url: "kolorimetrie-a-sprava-barev" },
      { name: "Kolorimetrie a správa barev – 2. část", url: "kolorimetrie-a-sprava-barev-2" }
    ]
  },
  {
    section: "Proces tvorby tiskovin",
    sectionSlug: "process",
    intro: `Postup vzniku tiskoviny od návrhu přes zpracování dat až po finální produkci.`,
    articles: [
      { name: "DTP", url: "dtp" },
      { name: "Zpracování předloh", url: "zpracovani-predloh" },
      { name: "Polygrafická produkce + zdraví a počítače", url: "polygraficka-produkce-zdravi" },
      { name: "Polygrafická montáž", url: "polygraficka-montaz" },
      { name: "Zpracování obrazu", url: "zpracovani-obrazu" },
      { name: "Příprava dat pro tisk", url: "priprava-dat-pro-tisk" }
    ]
  },
  {
    section: "Typy publikací",
    sectionSlug: "publishing",
    intro: `Přehled druhů publikací a jejich specifik v oblasti polygrafie a grafiky.`,
    articles: [
      { name: "Publikace", url: "publikace" },
      { name: "Publikace – 2. část", url: "publikace-2" },
      { name: "Periodické tiskoviny", url: "periodicke-tiskoviny" },
      { name: "Akcidence – 1. část", url: "akcidence-1" },
      { name: "Akcidence – 2. část", url: "akcidence-2" },
      { name: "Propagační grafika", url: "propagacni-grafika" },
      { name: "Propagační grafika – 2. část", url: "propagacni-grafika-2" },
      { name: "Mediální grafika", url: "medialni-grafika" }
    ]
  },
  {
    section: "Digitální věci",
    sectionSlug: "digital",
    intro: `Digitální technologie, tiskové techniky a práce s webem a PDF.`,
    articles: [
      { name: "Digitální technologie", url: "digitalni-technologie" },
      { name: "Digitální tiskové techniky", url: "digitalni-tiskove-techniky" },
      { name: "Webdesign a internet", url: "webdesign-a-internet" },
      { name: "PostScript a PDF", url: "postscript-a-pdf" }
    ]
  },
  {
    section: "Obaly",
    sectionSlug: "obaly",
    intro: `Problematika obalového designu a produkce obalů.`,
    articles: [
      { name: "Obaly", url: "obaly" }
    ]
  },
  {
    section: "Corporate identity",
    sectionSlug: "corporate",
    intro: `Základy vizuální identity a tvorby jednotného grafického stylu.`,
    articles: [
      { name: "Corporate identity", url: "corporate-identity" }
    ]
  }
];