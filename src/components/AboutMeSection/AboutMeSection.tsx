import { Button } from '@mui/material';
import './AboutMeSection.scss';
import { HiOutlineMail } from 'react-icons/hi';
import { LiaTelegramPlane } from 'react-icons/lia';
import AboutMeDescription from './AboutMeDescription/AboutMeDescription';

export default function AboutMeSection() {
  return (
    <section id="about-me" className="about-me">
      <img src="my-photo.jpg" className="about-me__img" alt="my photo" />
      <h2 className="about-me__name">
        Hi 👋, I&apos;m <span className="highlighted">Ivan</span>,
      </h2>
      <h2 className="about-me-job">Front-End Developer</h2>
      <div className="about-me-buttons-wrapper">
        <a
          href="mailto:amberlynn364@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="large" variant="contained" endIcon={<HiOutlineMail />}>
            Email Me
          </Button>
        </a>
        <a href="https://t.me/amberlynn364" target="_blank" rel="noreferrer">
          <Button
            size="large"
            variant="contained"
            endIcon={<LiaTelegramPlane />}
          >
            Text Me
          </Button>
        </a>
      </div>
      <AboutMeDescription />
    </section>
  );
}
