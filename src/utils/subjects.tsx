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
    intro: "technology",
  },
  Materials: {
    cz: "Polygrafické materiály",
    color: "#d6a62a",
    url: "materials",
    intro: "materials",
  },
  English: {
    cz: "Angličtina",
    color: "#61981e",
    url: "english",
    intro: "english",
  },
  Czech: {
    cz: "Čeština",
    color: "#238ca3",
    url: "czech",
    intro: "czech",
  },
} as const;

export type Subject = keyof typeof subjects;
