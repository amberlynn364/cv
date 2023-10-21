import React from 'react';
import languages from '../../../data/languages';
import './LanguagesList.scss';

export default function LanguagesList() {
  return (
    <dl className="languages__list">
      {languages.map(({ title, level, certificateLink }) => {
        return (
          <React.Fragment key={title}>
            <dt className="languages__title">{title}</dt>
            {certificateLink ? (
              <dd className="languages__level">
                <a href={certificateLink} target="_blank" rel="noreferrer">
                  {level}
                </a>
              </dd>
            ) : (
              <dd className="languages__level">{level}</dd>
            )}
          </React.Fragment>
        );
      })}
    </dl>
  );
}
