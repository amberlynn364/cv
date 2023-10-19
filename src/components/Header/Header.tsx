/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@mui/material';
import './Header.scss';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Button />
        <nav className="header-nav">
          <Navigation />
        </nav>
      </div>
    </header>
  );
}
