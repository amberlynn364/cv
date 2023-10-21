import contacts from '../../../data/contacts';
import './ContactLinks.scss';

export default function ContactLinks() {
  return (
    <ul className="contact-links">
      {contacts.map(({ title, link }) => {
        return (
          <li className="contact-links__item" key={title}>
            <a
              href={link}
              className="contact-links__link"
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
