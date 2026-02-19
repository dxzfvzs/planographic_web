import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./pantone.css";
import { Subject, subjects } from "../../../utils/subjects";

interface NavButtonProps {
  subject: Subject;
}

export default function Pantone({ subject }: NavButtonProps) {
  const config = subjects[subject];
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    setStyle({
      transform: `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
      `,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  };

  return (
    <Link
      ref={cardRef}
      to={config.url}
      className="pantone"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pantone__color-block" style={{ backgroundColor: config.color }}/>
      <div className="pantone__text-block">
        <div className="pantone__text__headline">
          <span className="pantone__text__headline--name">{subject}</span>
          <span className="pantone__text--mark">®</span>
        </div>
        <div className="pantone__text--description">0/25</div>
        <div className="pantone__text--description">{config.cz}</div>
      </div>
    </Link>
  );
}
