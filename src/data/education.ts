interface IEducations {
  id: number;
  year: string;
  status: string;
  certificateLink: string;
  degree: string;
  company: string;
  companyLink: string;
}

const educations: IEducations[] = [
  {
    id: 1,
    year: 'October, 2023 - now',
    status: 'In Progress',
    certificateLink: '',
    degree: 'React JS (EN)',
    company: 'Rolling Scopes School',
    companyLink: 'https://rs.school/react/',
  },
  {
    id: 2,
    year: 'March, 2023 - September, 2023',
    status: 'Certificate',
    certificateLink: 'https://app.rs.school/certificate/5nz7q9iq',
    degree: 'Javascript/Front-End Program (RU)',
    company: 'Rolling Scopes School',
    companyLink: 'https://rs.school/js/',
  },
  {
    id: 3,
    year: 'December, 2022 - March, 2023',
    status: 'Certificate',
    certificateLink: 'https://app.rs.school/certificate/qezw5iui',
    degree: 'Javascript/Front-End Program, Pre-School (RU)',
    company: 'Rolling Scopes School',
    companyLink: 'https://wearecommunity.io/events/js-stage0-rs-2022q4',
  },
  {
    id: 4,
    year: '2010 - 2015',
    status: 'Higher education',
    certificateLink: '',
    degree: 'Engineer Ecologist',
    company: 'Penza State University of Architecture and Construction',
    companyLink: '',
  },
];

export default educations;
