import type { ContentSection } from "./content";

export const materialsContent: ContentSection[] = [
  {
    section: "Výroba papíru",
    sectionSlug: "paper-making",
    intro: `Historie výroby papíru, surovinová základna a technologický proces výroby papíroviny a papíru.`,
    articles: [
      { name: "Historie výroby papíru", url: "historie-vyroby-papiru" },
      { name: "Výroba papíru na papírenském stroji", url: "vyroba-papiru-na-papirenskem-stroji" },
      { name: "Vláknoviny", url: "vlaknoviny" },
      { name: "Vlákniny", url: "vlakninny" },
      { name: "Výroba papíroviny", url: "vyroba-papiroviny" }
    ]
  },
  {
    section: "Papír celkově",
    sectionSlug: "paper",
    intro: `Vlastnosti, rozdělení a zušlechťování tiskových papírů.`,
    articles: [
      { name: "Zušlechťování tiskových papírů", url: "zuslechtovani-tiskovych-papiru" },
      { name: "Rozdělení tiskových papírů", url: "rozdeleni-tiskovych-papiru" },
      { name: "Všeobecné vlastnosti tiskových papírů", url: "vseobecne-vlastnosti-tiskovych-papiru" }
    ]
  },
  {
    section: "Polymery",
    sectionSlug: "polymers",
    intro: `Polymerní materiály, jejich vznik, vlastnosti a využití v polygrafii.`,
    articles: [
      { name: "Polymerní materiály", url: "polymerni-materialy" },
      { name: "Typy polyreakcí", url: "typy-polyreakci" },
      { name: "Přírodní polymery", url: "prirodni-polymery" },
      { name: "Syntetické polymery", url: "synteticke-polymery" },
      { name: "Fotopolymery", url: "fotopolymery" },
      { name: "Speciální polymery", url: "specialni-polymery" }
    ]
  },
  {
    section: "Fotografické materiály",
    sectionSlug: "photographic",
    intro: `Fotografické materiály a princip vzniku černobílé fotografie.`,
    articles: [
      { name: "Fotografické materiály", url: "fotograficke-materialy" },
      { name: "Princip vzniku černobílé fotografie", url: "princip-vzniku-cernobile-fotografie" }
    ]
  },
  {
    section: "Barvy",
    sectionSlug: "colors",
    intro: `Složení, vlastnosti a zasychání tiskových barev pro různé tiskové techniky.`,
    articles: [
      { name: "Složení tiskových barev: Barvotvorné složky", url: "slozeni-barev-barvotvorne-slozky" },
      { name: "Složení tiskových barev: Pojiva, rozpouštědla, ředidla", url: "slozeni-barev-pojiva-rozpoustedla-redidla" },
      { name: "Mechanismy zasychání tiskových barev", url: "mechanismy-zasychani-tiskovych-barev" },
      { name: "Tiskové barvy pro jednotlivé tiskové techniky", url: "tiskove-barvy-pro-jednotlive-techniky" }
    ]
  },
  {
    section: "Kovy a slitiny",
    sectionSlug: "metals",
    intro: `Vlastnosti kovových materiálů, jejich úpravy a využití v polygrafii.`,
    articles: [
      { name: "Vlastnosti kovových materiálů", url: "vlastnosti-kovovych-materialu" },
      { name: "Kovy využívané v polygrafii", url: "kovy-v-polygrafii" },
      { name: "Slitiny využívané v polygrafii", url: "slitiny-v-polygrafii" },
      { name: "Acidobazické teorie + síla kyselin a zásad", url: "acidobazicke-teorie-sila-kyselin-a-zasad" },
      { name: "Úprava kovových materiálů", url: "uprava-kovovych-materialu" }
    ]
  },
  {
    section: "Elektrochemické a chemické procesy",
    sectionSlug: "electrochem",
    intro: `Chemické a elektrochemické procesy využívané při jednotlivých tiskových technikách.`,
    articles: [
      { name: "Elektrochemické a chemické procesy při tisku z hloubky", url: "procesy-pri-tisku-z-hloubky" },
      { name: "Elektrochemické a chemické procesy při tisku z plochy a výšky", url: "procesy-pri-tisku-z-plochy-a-vysky" }
    ]
  }
];