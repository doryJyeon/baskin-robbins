import { MenuLinkWrapper } from '../../styles/GlobalStyle';
import { checkActive } from '../../utils/utilityFunctions';
import MoveLink from '../common/MoveLink';

interface Props {
  menuCheck: string;
}

const PlayLinks: React.FC<Props> = ({ menuCheck }) => {
  return (
    <MenuLinkWrapper>
      <MoveLink text={"이벤트"} to={"play/event/all"} isLi={true} isActive={checkActive(menuCheck, "event")} />
      <MoveLink text={"배라광장"} to={"play/plaza"} isLi={true} isActive={checkActive(menuCheck, "plaza")} />
    </MenuLinkWrapper>
  );
}

export default PlayLinks;
