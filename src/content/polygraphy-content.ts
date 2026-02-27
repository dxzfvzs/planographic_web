import type { ContentSection } from "./content";

export const polygraphyContent: ContentSection[] = [
    {
      section: "Tiskové techniky obecně",
      sectionSlug: "general",
      intro: `V této sekci se seznámíme se základními tiskovými technikami, jejich 
      rozdělením a přehledem. Také zde najdete srovnání různých metod a jejich využití.`,
      articles: [
        { name: "Rozdělení tiskových technik", url: "rozdeleni" },
        { name: "Přehled tiskových technik", url: "prehled" },
        { name: "Tiskové techniky a jejich srovnání", url: "srovnani" }
      ]
    },
    {
      section: "Jednotlivé techniky",
      sectionSlug: "techniques",
      intro: `Detailní popis jednotlivých tiskových technik včetně hloubotisku, 
      tisku z plochy, tisku z výšky, digitálního tisku a sítotisku.`,
      articles: [
        { name: "Tisk z hloubky", url: "depth" },
        { name: "Hlubotisk", url: "intaglio" },
        { name: "Tisk z plochy", url: "planographic" },
        { name: "Tisk z výšky", url: "relief" },
        { name: "Knihtisk", url: "letterpress" },
        { name: "Flexotisk", url: "flexography" },
        { name: "Digitální tisk", url: "digital" },
        { name: "Sítotisk", url: "screen" }
      ]
    },
    {
      section: "Knižní vazby",
      sectionSlug: "vazby",
      intro: `Sekce věnovaná knižním vazbám, jejich částem, rozdělení a historickému 
      vývoji. Zahrnuje postupy výroby měkké i tuhé vazby.`,
      articles: [
        { name: "Knižní vazby a jejich části", url: "vazby" },
        { name: "Rozdělení knižních vazeb", url: "rozdeleni" },
        { name: "Historický vývoj knižní vazby a knihařství", url: "historie" },
        { name: "Zhotovení vazby měkké", url: "mekka" },
        { name: "Zhotovení vazby tuhé", url: "tuha" }
      ]
    },
    {
      section: "Polygrafická výroba",
      sectionSlug: "polygraficka-vyroba",
      intro: `Přehled celého výrobního procesu tiskovin – od předvýrobní činnosti, 
      přes samotnou výrobu, až po dokončující zpracování a expedici.`,
      articles: [
        { name: "Fáze polygrafické výroby, fakturace a expedice", url: "faze" },
        { name: "Předvýrobní činnost podniku", url: "prepress" },
        { name: "Členění materiálů pro polygrafickou výrobu", url: "materialy" },
        { name: "Dokončující zpracování tiskovin", url: "dokoncujici-zpracovani" }
      ]
    },
    {
      section: "Historie",
      sectionSlug: "historie",
      intro: `Významné osobnosti polygrafie a jejich přínos pro rozvoj tiskového průmyslu.`,
      articles: [
        { name: "Významné osobnosti polygrafie", url: "osobnosti" }
      ]
    },
    {
      section: "Knihařské materiály",
      sectionSlug: "materials",
      intro: `Materiály používané v knihařské výrobě, členění materiálů pro polygrafii, 
      formáty papíru a zušlechťování polygrafických výrobků.`,
      articles: [
        { name: "Materiály používané v knihařské výrobě", url: "materialy-v-kniharske-vyrobe" },
        { name: "Knihařské materiály", url: "kniharske-materialy" },
        { name: "Členění materiálů pro polygrafickou výrobu", url: "cleneni" },
        { name: "Formáty papíru", url: "formaty" },
        { name: "Zušlechťování polygrafických výrobků", url: "zuslechtovani" }
      ]
    }
  ]
;