import { ContentSection } from "../content";

export const polygraphyContent: ContentSection[] = [
    {
      section: "Tiskové techniky obecně",
      sectionSlug: "general",
      intro: `V této sekci se seznámíme se základními tiskovými technikami, jejich 
      rozdělením a přehledem. Také zde najdete srovnání různých metod a jejich využití.`,
      articles: [
        { name: "Rozdělení tiskových technik", url: "division" },
        { name: "Přehled tiskových technik", url: "overview" },
        { name: "Tiskové techniky a jejich srovnání", url: "comparison" }
      ]
    },
    {
      section: "Jednotlivé techniky",
      sectionSlug: "techniques",
      intro: `Detailní popis jednotlivých tiskových technik včetně hloubotisku, 
      tisku z plochy, tisku z výšky, digitálního tisku a sítotisku.`,
      articles: [
        { name: "Tisk z hloubky Hlubotisk", url: "depth" },
        { name: "Hlubotisk", url: "intaglio" },
        { name: "Tisk z plochy", url: "planographic" },
        { name: "Tisk z výšky Knihtisk Flexotisk", url: "relief" },
        { name: "Digitální tisk", url: "digital" },
        { name: "Sítotisk", url: "screen" }
      ]
    },
    {
      section: "Knižní vazby",
      sectionSlug: "bindings",
      intro: `Sekce věnovaná knižním vazbám, jejich částem, rozdělení a historickému 
      vývoji. Zahrnuje postupy výroby měkké i tuhé vazby.`,
      articles: [
        { name: "Knižní vazby a její části", url: "parts" },
        { name: "Rozdělení knižních vazeb", url: "division" },
        { name: "Historický vývoj knižní vazby a knihařství", url: "history" },
        { name: "Zhotovení vazby měkké", url: "soft" },
        { name: "Zhotovení vazby tuhé", url: "hard" }
      ]
    },
    {
      section: "Polygrafická výroba",
      sectionSlug: "production",
      intro: `Přehled celého výrobního procesu tiskovin – od předvýrobní činnosti, 
      přes samotnou výrobu, až po dokončující zpracování a expedici.`,
      articles: [
        { name: "Fáze polygrafické výroby, fakturace a expedice", url: "phases" },
        { name: "Předvýrobní činnost podniku", url: "prepress" },
        { name: "Členění materiálů pro polygrafickou výrobu", url: "materials" },
        { name: "Dokončující zpracování tiskovin", url: "finishing" }
      ]
    },
    {
      section: "Historie",
      sectionSlug: "history",
      intro: `Významné osobnosti polygrafie a jejich přínos pro rozvoj tiskového průmyslu.`,
      articles: [
        { name: "Významné osobnosti polygrafie", url: "personalities" }
      ]
    },
    {
      section: "Knihařské materiály",
      sectionSlug: "materials",
      intro: `Materiály používané v knihařské výrobě, členění materiálů pro polygrafii, 
      formáty papíru a zušlechťování polygrafických výrobků.`,
      articles: [
        { name: "Materiály používané v knihařské výrobě", url: "usage" },
        { name: "Knihařské materiály", url: "bindings" },
        { name: "Členění materiálů pro polygrafickou výrobu", url: "division" },
        { name: "Formáty papíru", url: "formats" },
        { name: "Zušlechťování polygrafických výrobků", url: "finishing" }
      ]
    }
  ]
;