import { Link } from "react-router-dom"
import { MenuWrapper } from "./style"
import useHeaderStore from "../../store/useHeaderStore";

const HeaderPcMenu = () => {
  const { bgColored, checkBgColored, checkHoverMenu } = useHeaderStore();

  // menu hover
  const handleMouseOver = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const menuPath = event.currentTarget.getAttribute('href')?.split("/")[1] || "";
    checkHoverMenu(menuPath);
    checkBgColored(true);
  };

  return (
    <MenuWrapper show={bgColored}>
      <Link to={"/menu"} onMouseOver={handleMouseOver}>Menu</Link>
      <Link to={"/play/event/all"} onMouseOver={handleMouseOver}>BR Play</Link>
      <Link to={"/story/history"} onMouseOver={handleMouseOver}>BR Story</Link>
      <Link to={"/store/delivery"} onMouseOver={handleMouseOver}>Delivery</Link>
    </MenuWrapper>
  )
}

export default HeaderPcMenu
