export const subjects = {
  Polygraphy: {
    cz: "Polygrafie",
    color: "#E63946",
    url: "polygraphy",
    intro: "Polygrafie je obor výroby a reprodukce tištěných materiálů, který zahrnuje vše od přípravy dat," +
      " přes samotný tisk až po dokončovací úpravy výsledných produktů.",
  },
  Technology: {
    cz: "Technologie",
    color: "#df7432",
    url: "technology",
    intro: "Technologie se zaměřuje na technické procesy a výrobní postupy používané v polygrafii – od předtiskové přípravy " +
      "přes tiskové techniky až po zpracování hotových výrobků.",
  },
  Materials: {
    cz: "Polygrafické materiály",
    color: "#d6a62a",
    url: "materials",
    intro: "Polygrafické materiály zahrnují papíry, kartony, barvy, laky, lepidla a další materiály používané při " +
      "tisku a dokončovacím zpracování.",
  },
  English: {
    cz: "Angličtina",
    color: "#61981e",
    url: "english",
    intro: "Angličtina pokryje jak běžné maturitní otázky z každodenního života, tak i ty odborné z pohledu polygrafie.",
  },
  Czech: {
    cz: "Čeština",
    color: "#238ca3",
    url: "czech",
    intro: "Většinou zde budou různé rozbory literárních děl.",
  },
} as const;

export type Subject = keyof typeof subjects;
