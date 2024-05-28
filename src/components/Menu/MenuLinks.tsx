import { checkActive } from '../../utils/utilityFunctions';
import MoveLink from '../common/MoveLink';
import { MenuLinkWrapper } from './styled';

interface Props {
  menuType: string;
}

const MenuLinks: React.FC<Props> = ({ menuType }) => {

  return (
    <MenuLinkWrapper>
      <MoveLink text={"이달의 맛"} to={"menu/month"} isLi={true} isActive={checkActive(menuType, "month")} />
      <MoveLink text={"아이스크림"} to={"menu/ice_cream"} isLi={true} isActive={checkActive(menuType, "ice cream")} />
      <MoveLink text={"프리팩"} to={"menu/prepack"} isLi={true} isActive={checkActive(menuType, "prepack")} />
      <MoveLink text={"아이스크림케이크"} to={"menu/ice_cream_cake"} isLi={true} isActive={checkActive(menuType, "ice cream cake")} />
      <MoveLink text={"디저트"} to={"menu/dessert"} isLi={true} isActive={checkActive(menuType, "dessert")} />
      <MoveLink text={"음료"} to={"menu/beverage"} isLi={true} isActive={checkActive(menuType, "beverage")} />
      <MoveLink text={"커피"} to={"menu/coffee"} isLi={true} isActive={checkActive(menuType, "coffee")} />
    </MenuLinkWrapper>
  );
}

export default MenuLinks;
