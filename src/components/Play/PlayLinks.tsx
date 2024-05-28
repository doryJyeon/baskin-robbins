import MoveLink from '../common/MoveLink';
import { MenuLinkWrapper } from './styled';

interface Props {
  menuCheck: string;
}

const PlayLinks: React.FC<Props> = ({ menuCheck }) => {
  const checkActive = (checkUrl: string) => {
    return menuCheck === checkUrl;
  }

  return (
    <MenuLinkWrapper>
      <MoveLink text={"이벤트"} to={"play/event/all"} isLi={true} isActive={checkActive("event")} />
      <MoveLink text={"배라광장"} to={"play/plaza"} isLi={true} isActive={checkActive("plaza")} />
    </MenuLinkWrapper>
  );
}

export default PlayLinks;
