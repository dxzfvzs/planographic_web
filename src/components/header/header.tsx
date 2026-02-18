import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header>
      <a href="/" className="header_link-container link thicker-link">
        <img alt="Planographic" src="/img/logo.svg" className="header_logo"/>
      </a>
    </header>
  );
}
