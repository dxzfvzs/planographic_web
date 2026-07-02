import React from 'react';
import Pantone from "./pantone/pantone";
import MobileSubjectNav from "./mobile-subject-nav";
import { getSubjectEntries } from "../../utils/subjects";

interface HeroProps {
  currentCore: string;
  showMobileNav?: boolean;
}

export default function Hero({ currentCore, showMobileNav = true }: HeroProps) {
  const entries = getSubjectEntries();

  return (
    <>
      <div className="hero flex-gap">
        {entries.map(([key, info]) => (
          <Pantone
            key={key}
            subject={key}
            main={info.url === currentCore || currentCore === ""}
          />
        ))}
      </div>
      {showMobileNav && <MobileSubjectNav/>}
    </>
  );
}
