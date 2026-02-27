import type { ContentSection } from "./content";

// 2. Historický vývoj záznamových materiálů
// 4. Suroviny pro výrobu papíru
// 6. Strojní výroba papíru
// 8. Vlastnosti papírových materiálů
// 10. Složení tiskových barev
// 12. Tiskové barvy jednotlivých tiskových technik
// 14. Kovy a slitiny v polygrafii
// 15. Materiály využívané v dokončovacím zpracování
// 16. Úpravy kovových materiálů
// 18. Elektrochemické procesy v polygrafii
// 20. Polymerní materiály
// 22. Polymery v polygrafii
// 24. Fotografické materiály

export const materialsContent: ContentSection[] =
  [
    {
      section: "Papír a záznamové materiály",
      sectionSlug: "paper-making",
      intro: "Historie, suroviny a výroba papíru.",
      articles: [
        { name: "Historický vývoj záznamových materiálů", url: "historicky-vyvoj-zaznamovych-materialu" }, // 2
        { name: "Suroviny pro výrobu papíru", url: "suroviny-pro-vyrobu-papiru" }, // 4
        { name: "Strojní výroba papíru", url: "strojni-vyroba-papiru" }, // 6
        { name: "Vlastnosti papírových materiálů", url: "vlastnosti-papiru" } // 8
      ]
    },
    {
      section: "Materiály využívané v dokončovacím zpracování",
      sectionSlug: "materials",
      intro: "Materiály využívané v dokončovacím zpracování.",
      articles: [
        { name: "Materiály využívané v dokončovacím zpracování", url: "materialy" }, // 15
      ]
    },
    {
      section: "Polymery",
      sectionSlug: "polymers",
      intro: "Polymerní materiály a jejich využití v polygrafii.",
      articles: [
        { name: "Polymerní materiály", url: "polymerni-materialy" }, // 20
        { name: "Polymery v polygrafii", url: "polymery-v-polygrafii" } // 22
      ]
    },
    {
      section: "Fotografické materiály",
      sectionSlug: "photographic",
      intro: "Materiály a princip vzniku černobílé fotografie.",
      articles: [
        { name: "Fotografické materiály", url: "fotograficke-materialy" }, // 24
      ]
    },
    {
      section: "Barvy",
      sectionSlug: "colors",
      intro: "Složení a vlastnosti tiskových barev.",
      articles: [
        { name: "Složení tiskových barev", url: "slozeni-tiskovych-barev" }, // 10
        { name: "Tiskové barvy jednotlivých tiskových technik", url: "barvy-pro-techniky" } // 12
      ]
    },
    {
      section: "Kovy a slitiny",
      sectionSlug: "metals",
      intro: "Vlastnosti kovů, jejich úpravy a využití v polygrafii.",
      articles: [
        { name: "Kovy a slitiny v polygrafii", url: "kovy-a-slitiny" }, // 14
        { name: "Úpravy kovových materiálů", url: "upravy-kovu" } // 16
      ]
    },
    {
      section: "Elektrochemie a chemické procesy",
      sectionSlug: "electrochem",
      intro: "Elektrochemické procesy využívané v tisku.",
      articles: [
        { name: "Elektrochemické procesy v polygrafii", url: "elektrochemicke-procesy" } // 18
      ]
    }
  ];