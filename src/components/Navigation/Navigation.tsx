import { useState } from 'react';
import navigationLinks from '../../data/navigationLinks';
import './Navigation.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={!isOpen ? 'burger-menu' : 'burger-menu burger-menu_active'}>
      <div className="burger-menu__button" onClick={handleBurger}>
        <span className="burger-menu__lines" />
      </div>
      <nav className="header-nav">
        <ul className="navigation">
          {navigationLinks.map((link) => {
            return (
              <li
                className="navigation__item"
                key={link}
                onClick={() => isOpen && handleBurger()}
              >
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
      </nav>
      <div className="burger-menu__overlay" onClick={handleBurger} />
    </div>
  );
}
