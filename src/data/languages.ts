interface ILanguages {
  title: string;
  level: string;
  certificateLink?: string;
}

const languages: ILanguages[] = [
  {
    title: 'English',
    level: 'Upper-Intermediate',
    certificateLink: 'https://www.efset.org/cert/8sk6tg',
  },
  {
    title: 'Russian',
    level: 'Native',
  },
];

export default languages;
