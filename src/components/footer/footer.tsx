import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <span>
        <a href="https://github.com/dxzfvzs/planographic_web"
           className="link"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="GitHub Repozitář (otevře se v novém okně)"
        >
          GitHub Repozitář
        </a>
        <a href="https://planographic.8u.cz/"
           className="link"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Původní stránka (otevře se v novém okně)"
        >
          Původní stránka
        </a>
      </span>
    </footer>
  );
}
