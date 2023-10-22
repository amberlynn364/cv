interface IBooks {
  title: string;
  author: string;
  edition: string;
}

const books: IBooks[] = [
  {
    title: 'JavaScript - The Definitive Guide',
    author: 'David Flanagan',
    edition: '7th Edition',
  },
  {
    title: 'Learning React',
    author: 'Alex Banks, Eve Porcello',
    edition: '2nd Edition',
  },
];

export default books;
