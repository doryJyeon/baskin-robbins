import { MenuLinkWrapper } from '../../styles/GlobalStyle';
import { checkActive } from '../../utils/utilityFunctions';
import MoveLink from '../common/MoveLink';

interface Props {
  menuCheck: string;
}

const StoryLinks: React.FC<Props> = ({ menuCheck }) => {
  return (
    <MenuLinkWrapper>
      <MoveLink text={"이달의 맛 히스토리"} to={"story/history"} isLi={true} isActive={checkActive(menuCheck, "history")} />
      <MoveLink text={"Be Better"} to={"story/be_better"} isLi={true} isActive={checkActive(menuCheck, "be_better")} />
    </MenuLinkWrapper>
  );
}

export default StoryLinks;
