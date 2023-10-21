import educations from '../../../data/education';
import './EducationList.scss';

export default function EducationList() {
  return (
    <ul className="education__list">
      {educations.map(
        ({
          id,
          year,
          status,
          certificateLink,
          degree,
          company,
          companyLink,
        }) => {
          return (
            <li className="education__item" key={id}>
              <p className="education__year">{year}</p>
              {certificateLink ? (
                <p className="education__status">
                  <a href={certificateLink} target="_blank" rel="noreferrer">
                    {status}
                  </a>
                </p>
              ) : (
                <p className="education__status">{status}</p>
              )}
              <h4 className="education__degree">{degree}</h4>
              {companyLink ? (
                <p className="education__company">
                  <a href={companyLink} target="_blank" rel="noreferrer">
                    {company}
                  </a>
                </p>
              ) : (
                <p className="education__company">{company}</p>
              )}
            </li>
          );
        }
      )}
    </ul>
  );
}
