import React from 'react';
import { Link } from 'react-router-dom';
import './mobile-subject-nav.css';
import { Subject, subjects } from '../../utils/subjects';
import type { SubjectStyle } from '../../utils/css';

interface MobileSubjectNavProps {
  currentCore: string;
}

/**
 * Compact color-matched subject chips shown instead of the hero on narrow screens
 * */
export default function MobileSubjectNav({ currentCore }: MobileSubjectNavProps) {
  const entries = Object.entries(subjects) as [Subject, typeof subjects[Subject]][];

  return (
    <nav className="mobile_subject_nav">
      {entries.map(([key, info]) => (
        <Link
          key={key}
          to={`/${info.url}`}
          className={`mobile_subject_chip ${info.url === currentCore ? 'mobile_subject_chip--active' : ''}`}
          style={{ '--subject-color': info.color } as SubjectStyle}
        >
          <span className="mobile_subject_chip__swatch" style={{ backgroundColor: info.color }}/>
          {info.cz}
        </Link>
      ))}
    </nav>
  );
}
