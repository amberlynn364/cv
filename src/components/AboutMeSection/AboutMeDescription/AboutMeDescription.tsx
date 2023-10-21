import aboutMe from '../../../data/aboutMe';
import './AboutMeDescription.scss';

export default function AboutMeDescription() {
  return (
    <div className="about-me-description">
      {aboutMe.map((info, i) => (
        <p className="description__item" key={i}>
          {info}
        </p>
      ))}
    </div>
  );
}
