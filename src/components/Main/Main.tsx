import AboutMeSection from '../AboutMeSection/AboutMeSection';
import EducationSection from '../EducationSection/EducationSection';
import LanguagesSection from '../LanguageSection/LanguageSection';
import ProjectSection from '../ProjectSection/ProjectSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import './Main.scss';

export default function Main() {
  return (
    <main className="main">
      <div className="main-wrapper">
        <AboutMeSection />
        <SkillsSection />
        <ProjectSection />
        <EducationSection />
        <LanguagesSection />
      </div>
    </main>
  );
}
