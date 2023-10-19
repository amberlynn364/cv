import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SkillsTabs from '../SkillsTabs/SkillsTabs';
import './SkillsSection.scss';
import RouterPaths from '../../router/router-types';

export default function SkillsSection() {
  return (
    <section className="skills">
      <div className="skills-wrapper">
        <p className="subtitle">Why hire me</p>
        <SkillsTabs />
        <Button
          variant="contained"
          component={Link}
          to={RouterPaths.AboutMe}
          sx={{ width: 'max-content', marginTop: '30px' }}
        >
          More Details
        </Button>
      </div>
    </section>
  );
}
