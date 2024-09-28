import { Link } from "react-router-dom"
import { MobileGiftSection, MobileMenuDetailWrapper, MobileMenuWrapper } from "./style"
import MoveImg from "../common/MoveImg";
import useHeaderStore from "../../store/useHeaderStore";

const HeaderMobileMenuDetail = () => {
  const { mobileMenu, checkMobileMenu, checkBgColored } = useHeaderStore();

  // mobile menu li toggle
  const handleClickMenuToggle = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const pElement = event.currentTarget;
    const parentLi = pElement.closest('li');

    if (parentLi) parentLi.classList.toggle("active")
  }

  // mobile menu close
  const handleClickMenuClose = () => {
    // close parent li
    const activeLi = document.querySelectorAll("li.active")
    activeLi.forEach((li) => li.classList.remove("active"))

    // mobile menu & icon close
    checkBgColored(false)
    checkMobileMenu(false)
  }

  return (
    <MobileMenuWrapper show={mobileMenu}>
      <MobileMenuDetailWrapper>
        <li>
          <p onClick={handleClickMenuToggle}>Menu</p>
          <ol>
            <li><Link to={"/menu/month"} onClick={handleClickMenuClose}>이달의 맛</Link></li>
            <li><Link to={"/menu/ice_cream"} onClick={handleClickMenuClose}>아이스크림</Link></li>
            <li><Link to={"/menu/prepack"} onClick={handleClickMenuClose}>프리팩</Link></li>
            <li><Link to={"/menu/ice_cream_cake"} onClick={handleClickMenuClose}>아이스크림케이크</Link></li>
            <li><Link to={"/menu/dessert"} onClick={handleClickMenuClose}>디저트</Link></li>
            <li><Link to={"/menu/beverage"} onClick={handleClickMenuClose}>음료</Link></li>
            <li><Link to={"/menu/coffee"} onClick={handleClickMenuClose}>커피</Link></li>
          </ol>
        </li>
        <li>
          <p onClick={handleClickMenuToggle}>BR Play</p>
          <ol>
            <li><Link to={"/play/event/promotion"} onClick={handleClickMenuClose}>프로모션</Link></li>
            <li><Link to={"/play/event/benefit"} onClick={handleClickMenuClose}>제휴혜택</Link></li>
            <li><Link to={"/play/plaza"} onClick={handleClickMenuClose}>배라광장</Link></li>
          </ol>
        </li>
        <li>
          <p onClick={handleClickMenuToggle}>BR Story</p>
          <ol>
            <li><Link to={"story/history"} onClick={handleClickMenuClose}>이달의 맛 히스토리</Link></li>
            <li><Link to={"story/be_better"} onClick={handleClickMenuClose}>Be Better</Link></li>
          </ol>
        </li>
        <li>
          <p onClick={handleClickMenuToggle}>Delivery</p>
          <ol>
            <li><Link to={"/store/delivery"} onClick={handleClickMenuClose}>배달주문</Link></li>
            <li><Link to={"/store/catering"} onClick={handleClickMenuClose}>단체주문</Link></li>
          </ol>
        </li>
      </MobileMenuDetailWrapper>

      <MobileGiftSection>
        <p>배스킨라빈스 선물하기</p>
        <div>
          <MoveImg to={"http://m.celectory.com/mobile/brand/EB1411120840"} src="icons/img_gift_happycon.png" alt="gift happycon" blank={true} />
          <MoveImg to={"http://kko.to/IhPQ8sxiAf"} src="icons/img_gift_kakao.png" alt="gift kakao" blank={true} />
        </div>
      </MobileGiftSection>
    </MobileMenuWrapper>
  )
}

export default HeaderMobileMenuDetail
