import Subtitle from '../View/Subtitle/Subtitle';
import Title from '../View/Title/Title';
import './LanguageSection.scss';
import LanguagesList from './LanguagesList/LanguagesList';

export default function LanguagesSection() {
  return (
    <section id="languages" className="languages">
      <Subtitle subtitle="I can speak" />
      <Title title="Languages" />
      <LanguagesList />
    </section>
  );
}
