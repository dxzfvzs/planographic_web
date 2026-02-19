import React from "react";
import { polygraphyContent } from "../content/polygraphy/polygraphy-content";
import NavButton from "../components/nav-button/nav-button";

export default function Polygraphy() {
  return (
    <>
      <section>
        <h1>Polygrafie</h1>
        <p>
          Polygrafie je obor výroby a reprodukce tištěných materiálů, který zahrnuje
          vše od přípravy dat, přes samotný tisk až po dokončovací úpravy výsledných
          produktů.
        </p>
      </section>

      {polygraphyContent.map((section) => (
        <section>
          <h2>{section.section}</h2>
          <p>{section.intro}</p>
          <div className="flex-gap">
            {section.articles.map((article) => (
              <NavButton url={`${section.sectionSlug}/${article.url}`} text={article.name}/>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
