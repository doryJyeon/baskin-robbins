import MoveLink from '../common/MoveLink';
import { MenuLinkWrapper } from './styled';

interface Props {
  menuType: string;
}

const MenuLinks: React.FC<Props> = ({ menuType }) => {
  const checkActive = (checkUrl: string) => {
    return menuType === checkUrl;
  }

  return (
    <MenuLinkWrapper>
      <MoveLink text={"이달의 맛"} to={"menu/month"} isLi={true} isActive={checkActive("month")} />
      <MoveLink text={"아이스크림"} to={"menu/ice_cream"} isLi={true} isActive={checkActive("ice cream")} />
      <MoveLink text={"프리팩"} to={"menu/prepack"} isLi={true} isActive={checkActive("prepack")} />
      <MoveLink text={"아이스크림케이크"} to={"menu/ice_cream_cake"} isLi={true} isActive={checkActive("ice cream cake")} />
      <MoveLink text={"디저트"} to={"menu/dessert"} isLi={true} isActive={checkActive("dessert")} />
      <MoveLink text={"음료"} to={"menu/beverage"} isLi={true} isActive={checkActive("beverage")} />
      <MoveLink text={"커피"} to={"menu/coffee"} isLi={true} isActive={checkActive("coffee")} />
    </MenuLinkWrapper>
  );
}

export default MenuLinks;
