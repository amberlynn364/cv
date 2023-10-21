import EducationSection from '../EducationSection/EducationSection';
import ProjectSection from '../ProjectSection/ProjectSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import './Main.scss';

export default function Main() {
  return (
    <main className="main">
      <div className="main-wrapper">
        <SkillsSection />
        <ProjectSection />
        <EducationSection />
      </div>
    </main>
  );
}
