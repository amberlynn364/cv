import './Title.scss';

export default function Title({ title }: { title: string }) {
  return <h2 className="title">{title}</h2>;
}
