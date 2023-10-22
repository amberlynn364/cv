import books from '../../../data/books';
import './BooksList.scss';

export default function BooksList() {
  return (
    <ul className="education__books">
      {books.map(({ title, author, edition }, index) => {
        return (
          <li className="education__book" key={index}>
            <p>
              <span className="book__title">{title}</span>,&nbsp;
              <span className="book__edition">{edition}</span> by&nbsp;
              <span className="book__author">{author}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
