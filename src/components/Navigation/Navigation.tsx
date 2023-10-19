import navigationLinks from '../../data/navigationLinks';
import './Navigation.scss';

export default function Navigation() {
  return (
    <ul className="navigation">
      {navigationLinks.map((link) => {
        return (
          <li className="navigation__item" key={link}>
            <a
              className="navigation__link"
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
            >
              {link}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
