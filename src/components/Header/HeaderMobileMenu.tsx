import useHeaderStore from "../../store/useHeaderStore";
import { MobileMenuIcon } from "./style";

const HeaderMobileMenu = () => {
  const { bgColored, checkMobileMenu, checkBgColored } = useHeaderStore();

  // mobile menu show / hide 
  const handleMobileMenuShow = (event: React.MouseEvent<HTMLButtonElement>) => {
    const thisTarget = event.currentTarget;
    thisTarget.classList.toggle("active")

    // menu open
    checkMobileMenu(thisTarget.classList.contains("active"))
    // header bg color
    thisTarget.classList.contains("active") && checkBgColored(true)
  }

  return (
    <MobileMenuIcon show={bgColored} onClick={handleMobileMenuShow}>
      <div className="menu__mobile__line"></div>
      <div className="menu__mobile__line"></div>
      <div className="menu__mobile__line"></div>
    </MobileMenuIcon>
  )
}

export default HeaderMobileMenu
