import useHeaderStore from "../../store/useHeaderStore";
import { MobileMenuIcon } from "./style";

const HeaderMobileMenu = () => {
  const { mobileMenu, bgColored, checkMobileMenu, checkBgColored } = useHeaderStore();

  // mobile menu show / hide 
  const handleMobileMenuShow = () => {
    const menuShow = !mobileMenu
    checkBgColored(menuShow)
    checkMobileMenu(menuShow)
  }

  return (
    <MobileMenuIcon className={`${mobileMenu && "active"}`} show={bgColored} onClick={handleMobileMenuShow}>
      <div className="menu__mobile__line"></div>
      <div className="menu__mobile__line"></div>
      <div className="menu__mobile__line"></div>
    </MobileMenuIcon>
  )
}

export default HeaderMobileMenu
