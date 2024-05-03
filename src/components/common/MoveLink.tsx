import { Link } from "react-router-dom";

interface Props {
  text: string;
  to: string;
  isLi?: boolean;
}

const MoveLink: React.FC<Props> = ({ text, to, isLi }) => {
  
  return (
    isLi
    ? <li><Link to={`/${to}`}>{text}</Link></li>
    : <Link to={`/${to}`}>{text}</Link>
  );
};

export default MoveLink;
