/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.scss';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-title-wrapper">
          <h1 className="header-title">
            Port<span className="header-title-span">folio</span>
          </h1>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
