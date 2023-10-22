import Subtitle from '../View/Subtitle/Subtitle';
import Title from '../View/Title/Title';
import BooksList from './BooksList/BooksList';
import EducationList from './EducationList/EducationList';
import './EducationSection.scss';

export default function EducationSection() {
  return (
    <section id="education" className="education">
      <Subtitle subtitle="Where I gained my knowledge" />
      <Title title="Education and courses" />
      <EducationList />
      <div className="books-wrapper">
        <Title title="Books" />
        <BooksList />
      </div>
    </section>
  );
}
