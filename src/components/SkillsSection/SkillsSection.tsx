import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SkillsTabs from './SkillsTabs/SkillsTabs';
import './SkillsSection.scss';
import RouterPaths from '../../router/router-types';
import Subtitle from '../View/Subtitle/Subtitle';

export default function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <Subtitle subtitle="Why hire me" />
      <SkillsTabs />
      <Button
        variant="contained"
        component={Link}
        to={RouterPaths.AboutMe}
        sx={{ width: 'max-content', marginTop: '30px' }}
      >
        More Details
      </Button>
    </section>
  );
}
