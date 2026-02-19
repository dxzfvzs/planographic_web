import { Link } from "react-router-dom";
import "./pantone.css"

interface NavButtonProps {
  subject: Subject;
}

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

export default function Pantone({ subject }: NavButtonProps) {
  const config = subjects[subject];

  return (
    <Link to={config.url} className="pantone">
      <div className="pantone__color-block" style={{ backgroundColor: config.color }}/>
      <div className="pantone__text-block">
        <div className="pantone__text--headline">{subject}®</div>
        <div className="pantone__text--description">0/25</div>
        <div className="pantone__text--description">{config.cz}</div>
      </div>
    </Link>
  );
}
