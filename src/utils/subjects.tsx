export const subjects = {
  Polygraphy: {
    cz: "Polygrafie",
    color: "#E63946",
    url: "polygraphy",
  },
  Technology: {
    cz: "Technologie",
    color: "#df7432",
    url: "technology",
  },
  Materials: {
    cz: "Polygrafické materiály",
    color: "#d6a62a",
    url: "materials",
  },
  English: {
    cz: "Angličtina",
    color: "#61981e",
    url: "english",
  },
  Czech: {
    cz: "Čeština",
    color: "#238ca3",
    url: "czech",
  },
} as const;

export type Subject = keyof typeof subjects;
