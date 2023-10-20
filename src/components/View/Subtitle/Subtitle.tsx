import './Subtitle.scss';

export default function Subtitle({ subtitle }: { subtitle: string }) {
  return <p className="subtitle">{subtitle}</p>;
}
