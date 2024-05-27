import { Link } from "react-router-dom";

interface Props {
  text: string;
  to: string;
  isLi?: boolean;
  isActive?: boolean;
}

const MoveLink: React.FC<Props> = ({ text, to, isLi, isActive }) => {
  const liActive = isActive ? "active" : undefined;
  return (
    isLi
      ? <li className={liActive}><Link to={`/${to}`}>{text}</Link></li>
      : <Link to={`/${to}`}>{text}</Link>
  );
};

export default MoveLink;
