export interface IProjects {
  id: number;
  link: string;
  img: string;
  stack: string;
  title: string;
  description: string;
}

const projects: IProjects[] = [
  {
    id: 1,
    link: 'https://kratkoe.netlify.app/',
    img: 'kratkoe.jpg',
    stack: 'React, Redux toolkit, TypeScript',
    title: 'Kratkoe - Online Clothing Store',
    description:
      '"Kratkoe" SPA online store. Focused on intuitive online shopping, providing adaptability, and a multifunctional product catalog.',
  },
  {
    id: 2,
    link: 'https://amberlynn364.github.io/CSS-selectors-game/rss-css-selectors/',
    img: 'css.jpg',
    stack: 'TypeScript, Sass',
    title: 'CSS Selector Trainer',
    description:
      'An interactive trainer for practicing CSS selector writing. The project helps you improve your skills in working with CSS. Built with TypeScript and Webpack for efficient development.',
  },
  {
    id: 3,
    link: 'https://amberlynn364.github.io/Minesweeper/minesweeper/',
    img: 'minesweeper.jpg',
    stack: 'JavaScript, Sass',
    title: 'Minesweeper',
    description:
      'A clone of the classic "Minesweeper" game built using vanilla JavaScript. The game offers a real challenge for your logical skills.',
  },
];

export default projects;
