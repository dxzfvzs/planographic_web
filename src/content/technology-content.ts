import type { ContentSection } from "./content";

export const technologyContent: ContentSection[] = [
  {
    section: "Polygrafická produkce a písmo",
    sectionSlug: "production-fonts",
    intro: "Základní přehled polygrafické produkce a písma používaného v tiskovinách.",
    articles: [
      { name: "Polygrafická produkce", url: "polygraficka-produkce" },
      { name: "Písmo", url: "pismo" },
      { name: "Zpracování předloh", url: "zpracovani-predloh" },
      { name: "Hladká sazba", url: "hladka-sazba" }
    ]
  },
  {
    section: "Tiskoviny a grafika",
    sectionSlug: "print-graphics",
    intro: "Různé typy tiskovin a grafických materiálů v polygrafii a reklamě.",
    articles: [
      { name: "Akcidenční tiskoviny", url: "akcidenční-tiskoviny" },
      { name: "Propagační grafika", url: "propagacni-grafika" },
      { name: "Firemní identita", url: "firemni-identita" },
      { name: "Periodické tiskoviny", url: "periodicke-tiskoviny" },
      { name: "Kniha jako fenomén", url: "kniha-jako-fenomen" },
      { name: "Mediální grafika", url: "medialni-grafika" },
      { name: "Obaly", url: "obaly" },
      { name: "Příložitostné tiskoviny", url: "prilozitostne-tiskoviny" },
      { name: "Grafické zpracování knihy", url: "graficke-zpracovani-knihy" },
      { name: "Zhotovení textu", url: "zhotoveni-textu" }
    ]
  },
  {
    section: "Digitální zpracování obrazu",
    sectionSlug: "digital-image",
    intro: "Zpracování tónového obrazu, digitalizace a správa barev.",
    articles: [
      { name: "Zpracování tónového obrazu", url: "zpracovani-tonoveho-obrazu" },
      { name: "Digitalizace obrazu", url: "digitalizace-obrazu" },
      { name: "Správa barev", url: "sprava-barev" },
      { name: "Teorie světla, barev a jejich charakteristiky", url: "teorie-svetla-a-barev" }
    ]
  },
  {
    section: "Digitální technologie a workflow",
    sectionSlug: "digital-technology",
    intro: "Digitální technologie, DTP, webdesign a výstupní formáty.",
    articles: [
      { name: "DTP studio", url: "dtp-studio" },
      { name: "Digitální technologie", url: "digitalni-technologie" },
      { name: "Webdesign", url: "webdesign" },
      { name: "Výstupní datové formáty", url: "vystupni-datove-formaty" },
      { name: "Digitální workflow", url: "digitalni-workflow" }
    ]
  },
  {
    section: "Polygrafická montáž a nosiče",
    sectionSlug: "assembly-carriers",
    intro: "Montáž polygrafických výrobků a nosiče reklamního sdělení.",
    articles: [
      { name: "Polygrafická montáž", url: "polygraficka-montaz" },
      { name: "Nosiče reklamního sdělení", url: "nosice-reklamniho-sdeleni" }
    ]
  }
];
