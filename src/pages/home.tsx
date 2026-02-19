import React from 'react';
import ClickableLink from "../components/clickable-link/clickable-link";
import NavButton from "../components/nav-button/nav-button";

export default function Home() {
  return (
    <>
      <section>
        <h2>Od studentů, pro studenty</h2>
        <p>
          {`Na tomto webu naleznete různé zpracované zápisky, výpisky, témata, otázky... `}
        </p>

        <p>
          {`Vše pro studenty `}
          <ClickableLink
            url={"https://ssgbrno.cz/"}>
            <strong>Střední školy grafické v Brně</strong>
          </ClickableLink>

          {`, přesněji pro obor `}

          <ClickableLink
            url={"https://www.infoabsolvent.cz/Skoly/Skola/600013910/Stredni-skola-graficka-Brno-prispevkova-/SOS?kodOboru=3453L01"}>
            <strong>Reprodukční grafik pro média</strong>
            {` (`}
            34-53-L/01
            {`).`}
          </ClickableLink>
        </p>
      </section>

      <section>
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
