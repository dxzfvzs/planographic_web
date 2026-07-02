import React from 'react';
import { NavLink } from 'react-router-dom';
import './mobile-subject-nav.css';
import { getSubjectEntries } from '../../utils/subjects';
import type { SubjectStyle } from '../../utils/css';

/**
 * Compact color-matched subject chips shown instead of the hero on narrow screens
 * */
export default function MobileSubjectNav() {
  const entries = getSubjectEntries();

  return (
    <nav className="mobile_subject_nav" aria-label="Navigace po předmětech">
      {entries.map(([key, info]) => (
        <NavLink
          key={key}
          to={`/${info.url}`}
          className={({ isActive }) => `mobile_subject_chip ${isActive ? 'mobile_subject_chip--active' : ''}`}
          style={{ '--subject-color': info.color } as SubjectStyle}
        >
          <span className="mobile_subject_chip__swatch" style={{ backgroundColor: info.color }}/>
          {info.cz}
        </NavLink>
      ))}
    </nav>
  );
}
