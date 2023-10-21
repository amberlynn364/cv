import ContactLinks from './ContactLinks/ContactLinks';
import './Footer.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacts" className="footer">
      <p className="footer__copyright">{`© ${currentYear} by Ivan Timoshkin`}</p>
      <ContactLinks />
    </footer>
  );
}
