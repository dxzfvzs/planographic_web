import React from 'react';
import Pantone from "./pantone/pantone";

export default function Hero() {
  return (
    <div className="hero flex-gap">
      <Pantone subject={"Polygraphy"} />
      <Pantone subject={"Technology"}/>
      <Pantone subject={"Materials"}/>
      <Pantone subject={"English"}/>
      <Pantone subject={"Czech"}/>
    </div>
  );
}
