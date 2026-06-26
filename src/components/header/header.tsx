import React, { useState } from 'react';
import './header.css';
import { subjects } from "../../utils/subjects";
import { Link, useLocation } from "react-router-dom";
import type { SubjectStyle } from "../../utils/css";

// clickable buttons on the header for each subject, for desktop/wide screen
// will disappear on close zoom
function HeaderNav() {
  return (
    <nav className="header_nav flex-gap">
      {Object.entries(subjects).map(([key, sub]) => (
        <Link key={key} to={sub.url}
              className="link header_link"
              style={{ textDecoration: 'none', "--subject-color": sub.color } as SubjectStyle}
        >
          {sub.cz}
        </Link>
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
            <Link
              key={key}
              to={sub.url}
              className="header_link link"
              style={{ "--subject-color": sub.color } as SubjectStyle}
              onClick={() => setMenuOpen(false)}
            >
              {sub.cz}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

const subjectColorByUrl = Object.fromEntries(
  Object.values(subjects).map(s => [s.url, s.color])
);

export default function Header() {
  const location = useLocation();
  const subjectSlug = location.pathname.split('/')[1];
  const logoColor = subjectColorByUrl[subjectSlug] ?? 'rgba(255,255,255,0.35)';

  return (
    <header>
      <Link to={`/`} className="header__link-container link link--thicker"
            style={{ "--subject-color": logoColor } as SubjectStyle}>
        <img alt="Planographic" src={`${import.meta.env.BASE_URL}img/logo.svg`} className="header_logo"/>
      </Link>
      <HeaderNav/>
      <BurgerMenu/>
    </header>
  );
}
