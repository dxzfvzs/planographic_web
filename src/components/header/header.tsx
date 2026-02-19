import React, { useState } from 'react';
import './header.css';
import { subjects } from "../../utils/subjects";

// clickable buttons on the header for each subject, for desktop/wide screen
// will disappear on close zoom
function HeaderNav() {
  return (
    <nav className="header_nav flex-gap">
      {Object.entries(subjects).map(([key, sub]) => (
        <a key={key} href={`/${sub.url}`}
           className="link header_link"
           style={{ textDecoration: 'none' }}
        >
          {sub.cz}
        </a>
      ))}
    </nav>
  );
}

// nav for phone or narrow screens, should replace full headernav if not enough space for it
function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button className="burger_button" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      {menuOpen && (
        <div className="burger_menu">
          {Object.entries(subjects).map(([key, sub]) => (
            <a
              key={key}
              href={`/${sub.url}`}
              className="header_link link"
              onClick={() => setMenuOpen(false)}
            >
              {sub.cz}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default function Header() {
  return (
    <header>
      <a href="/" className="header__link-container link link--thicker">
        <img alt="Planographic" src="/img/logo.svg" className="header_logo"/>
      </a>
      <HeaderNav/>
      <BurgerMenu/>
    </header>
  );
}
