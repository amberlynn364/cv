import Carousel from 'react-material-ui-carousel';
import Subtitle from '../View/Subtitle/Subtitle';
import Title from '../View/Title/Title';
import './ProjectSection.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import projects from '../../data/projects';

export default function ProjectSection() {
  return (
    <section id="projects" className="projects">
      <Subtitle subtitle="What i do" />
      <Title title="Recent projects" />
      <div className="projects__wrapper">
        <Carousel
          navButtonsAlwaysVisible={projects.length > 1}
          navButtonsAlwaysInvisible={projects.length <= 1}
          indicators={projects.length > 1}
          fullHeightHover={false}
          navButtonsWrapperProps={{
            style: {
              padding: '10px',
            },
          }}
          navButtonsProps={{
            style: {
              margin: '0',
              backgroundColor: 'transparent',
            },
          }}
          sx={{ width: '100%' }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
