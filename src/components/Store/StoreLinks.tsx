import { MenuLinkWrapper } from '../../styles/GlobalStyle';
import { checkActive } from '../../utils/utilityFunctions';
import MoveLink from '../common/MoveLink';

interface Props {
  menuCheck: string;
}

const StoryLinks: React.FC<Props> = ({ menuCheck }) => {
  return (
    <MenuLinkWrapper>
      <MoveLink text={"배달주문"} to={"store/delivery"} isLi={true} isActive={checkActive(menuCheck, "delivery")} />
      <MoveLink text={"단체주문"} to={"store/catering"} isLi={true} isActive={checkActive(menuCheck, "catering")} />
    </MenuLinkWrapper>
  );
}

export default StoryLinks;
