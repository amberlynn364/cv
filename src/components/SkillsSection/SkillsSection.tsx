import SkillsTabs from '../SkillsTabs/SkillsTabs';
import './SkillsSection.scss';

export default function SkillsSection() {
  return (
    <section className="skills">
      <div className="skills-wrapper">
        <p className="subtitle">Why hire me</p>
        <SkillsTabs />
      </div>
    </section>
  );
}
