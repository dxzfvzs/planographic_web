import type { ContentSection } from "./content";

export const technologyContent: ContentSection[] = [
  {
    section: "Polygrafická produkce a písmo",
    sectionSlug: "production-fonts",
    intro: "Základní přehled polygrafické produkce a písma používaného v tiskovinách.",
    articles: [
      { name: "Polygrafická produkce", url: "polygraficka-produkce", done: false },
      { name: "Písmo", url: "pismo", done: false },
      { name: "Zpracování předloh", url: "zpracovani-predloh", done: false },
      { name: "Hladká sazba", url: "hladka-sazba", done: false }
    ]
  },
  {
    section: "Tiskoviny a grafika",
    sectionSlug: "print-graphics",
    intro: "Různé typy tiskovin a grafických materiálů v polygrafii a reklamě.",
    articles: [
      { name: "Akcidenční tiskoviny", url: "akcidenční-tiskoviny", done: false },
      { name: "Propagační grafika", url: "propagacni-grafika", done: false },
      { name: "Firemní identita", url: "firemni-identita", done: false },
      { name: "Periodické tiskoviny", url: "periodicke-tiskoviny", done: false },
      { name: "Kniha jako fenomén", url: "kniha-jako-fenomen", done: false },
      { name: "Mediální grafika", url: "medialni-grafika", done: false },
      { name: "Obaly", url: "obaly", done: false },
      { name: "Příležitostné tiskoviny", url: "prilozitostne-tiskoviny", done: false },
      { name: "Grafické zpracování knihy", url: "graficke-zpracovani-knihy", done: false },
      { name: "Zhotovení textu", url: "zhotoveni-textu", done: false }
    ]
  },
  {
    section: "Digitální zpracování obrazu",
    sectionSlug: "digital-image",
    intro: "Zpracování tónového obrazu, digitalizace a správa barev.",
    articles: [
      { name: "Zpracování tónového obrazu", url: "zpracovani-tonoveho-obrazu", done: false },
      { name: "Digitalizace obrazu", url: "digitalizace-obrazu", done: false },
      { name: "Správa barev", url: "sprava-barev", done: false },
      { name: "Teorie světla, barev a jejich charakteristiky", url: "teorie-svetla-a-barev", done: false }
    ]
  },
  {
    section: "Digitální technologie a workflow",
    sectionSlug: "digital-technology",
    intro: "Digitální technologie, DTP, webdesign a výstupní formáty.",
    articles: [
      { name: "DTP studio", url: "dtp-studio", done: false },
      { name: "Digitální technologie", url: "digitalni-technologie", done: false },
      { name: "Webdesign", url: "webdesign", done: false },
      { name: "Výstupní datové formáty", url: "vystupni-datove-formaty", done: false },
      { name: "Digitální workflow", url: "digitalni-workflow", done: false }
    ]
  },
  {
    section: "Polygrafická montáž a nosiče",
    sectionSlug: "assembly-carriers",
    intro: "Montáž polygrafických výrobků a nosiče reklamního sdělení.",
    articles: [
      { name: "Polygrafická montáž", url: "polygraficka-montaz", done: false },
      { name: "Nosiče reklamního sdělení", url: "nosice-reklamniho-sdeleni", done: false }
    ]
  }
];
