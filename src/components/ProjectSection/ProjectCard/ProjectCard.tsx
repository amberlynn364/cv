import { Button } from '@mui/material';
import './ProjectCard.scss';
import Subtitle from '../../View/Subtitle/Subtitle';
import Title from '../../View/Title/Title';
import { IProjects } from '../../../data/projects';

export default function ProjectCard({ project }: { project: IProjects }) {
  const { link, img, stack, title, description } = project;
  return (
    <article className="projects__item">
      <a
        href={link}
        className="projects__link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={img} alt={title} className="projects__img" />
        <div className="projects__content">
          <div className="projects__title-wrapper">
            <Subtitle subtitle={stack} />
            <Title title={title} />
          </div>
          <p className="projects__description">{description}</p>
          <Button
            variant="contained"
            sx={{
              width: 'max-content',
              backgroundColor: '#e55352',
              '&:hover': {
                backgroundColor: '#d93533',
              },
            }}
          >
            View project
          </Button>
        </div>
      </a>
    </article>
  );
}
