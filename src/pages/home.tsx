import React from 'react';
import ClickableLink from "../components/clickable-link/clickable-link";

export default function Home() {
  return (
    <div className="flex-col" style={{ gap: '1.2em' }}>
      <p>
        Zápisky a výpisky ke státní maturitní zkoušce pro studenty{" "}
        <ClickableLink url={"https://ssgbrno.cz/"}>
          Střední školy grafické v Brně
        </ClickableLink>
        {", obor "}
        <ClickableLink url={"https://www.infoabsolvent.cz/Skoly/Skola/600013910/Stredni-skola-graficka-Brno-prispevkova-/SOS?kodOboru=3453L01"}>
          Reprodukční grafik pro média
        </ClickableLink>
        {" (34-53-L/01)."}
      </p>
      <p>
        Web je otevřený příspěvkům – pokud najdete chybu, máte lepší zápisky nebo chcete doplnit nová témata,{" "}
        <ClickableLink url={"https://github.com/dxzfvzs/planographic_web"}>
          pošlete pull request na GitHubu
        </ClickableLink>
        . Chyby a náměty lze také nahlásit přímo přes{" "}
        <ClickableLink url={"https://github.com/dxzfvzs/planographic_web/issues"}>
          GitHub Issues
        </ClickableLink>
        .
      </p>
    </div>
  );
}
