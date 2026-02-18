import React from 'react';
import ClickableLink from "../components/clickable-link/clickable-link";
import NavButton from "../components/nav-button/nav-button";

export default function Home() {
  return (
    <>
      <section>
        <h2>O webu</h2>
        <p>
          {`Zde naleznete různé zpracované zápisky, výpisky, témata, otázky... Čeho se týkají? `}
          <strong>Tisku z plochy</strong>
          {`! Mimo to i `}
          <strong>polygrafie</strong>
          {` celkově, stejně jako `}
          <strong>technologie</strong>, <strong>přípravě tiskovin</strong>
          {` a `}
          <strong>polygrafických materiálů</strong>.
        </p>

        <p>
          {`Věci tady jsou hlavně určeny (nebo spíš vznikly ze) `}
          <strong>Střední školy grafické v Brně</strong>
          {`, pro obor `}
          <strong>Reprodukční grafik pro média</strong>
          {`. (Kód oboru: `}
          <ClickableLink
            url={"https://www.infoabsolvent.cz/Skoly/Skola/600013910/Stredni-skola-graficka-Brno-prispevkova-/SOS?kodOboru=3453L01"}>
            34-53-L/01
          </ClickableLink>
          {`)`}
        </p>
      </section>

      <section>
        <h2>Předměty</h2>
        <p>
          {`Každé tlačítko vede na hlavní stránku předmětu. Enjoy!`}
        </p>

        <div className="flex-gap">
          <NavButton url={"/polygraphy"} text={"Polygrafie"}/>
          <NavButton url={"/technology"} text={"Technologie"}/>
          <NavButton url={"/materials"} text={"Polygrafické materiály"}/>
          <NavButton url={"/english"} text={"Angličtina"}/>
          <NavButton url={"/czech"} text={"Čeština"}/>
        </div>

      </section>
    </>
  );
}
