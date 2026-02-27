import React from 'react';
import Pantone from "./pantone/pantone";
import { Subject, subjects } from "../../utils/subjects";

interface HeroProps {
  currentCore: string;
}

export default function Hero({ currentCore }: HeroProps) {
  const entries = Object.entries(subjects) as [Subject, typeof subjects[Subject]][];

  return (
    <div className="hero flex-gap">
      {entries.map(([key, info]) => (
        <Pantone
          key={key}
          subject={key}
          main={info.url === currentCore || currentCore === ""}
        />
      ))}
    </div>
  );
}
