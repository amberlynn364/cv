import './SkillsList.scss';

export default function SkillsList({ skills }: { skills: string[] }) {
  return (
    <ul className="skills__list">
      {skills.map((skill) => (
        <li className="skills__item" key={skill}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
