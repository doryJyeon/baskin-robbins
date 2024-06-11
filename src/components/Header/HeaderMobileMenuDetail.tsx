import { Link } from "react-router-dom"
import { MobileGiftSection, MobileMenuDetailWrapper, MobileMenuWrapper } from "./style"
import MoveImg from "../common/MoveImg";
import useHeaderStore from "../../store/useHeaderStore";

const HeaderMobileMenuDetail = () => {
  const mobileMenu = useHeaderStore((state) => state.mobileMenu);

  // mobile menu li controll
  const handleMobileMenuClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const pElement = event.currentTarget;
    const parentLi = pElement.closest('li');

    if (parentLi) parentLi.classList.toggle("active")
  }

  return (
    <MobileMenuWrapper show={mobileMenu}>
      <MobileMenuDetailWrapper>
        <li>
          <p onClick={handleMobileMenuClick}>Menu</p>
          <ol>
            <li><Link to={"/menu/month"}>이달의 맛</Link></li>
            <li><Link to={"/menu/ice_cream"}>아이스크림</Link></li>
            <li><Link to={"/menu/prepack"}>프리팩</Link></li>
            <li><Link to={"/menu/ice_cream_cake"}>아이스크림케이크</Link></li>
            <li><Link to={"/menu/dessert"}>디저트</Link></li>
            <li><Link to={"/menu/beverage"}>음료</Link></li>
            <li><Link to={"/menu/coffee"}>커피</Link></li>
          </ol>
        </li>
        <li>
          <p onClick={handleMobileMenuClick}>BR Play</p>
          <ol>
            <li><Link to={"/play/event/promotion"}>프로모션</Link></li>
            <li><Link to={"/play/event/benefit"}>제휴혜택</Link></li>
            <li><Link to={"/play/plaza"}>배라광장</Link></li>
          </ol>
        </li>
        <li>
          <p onClick={handleMobileMenuClick}>BR Story</p>
          <ol>
            <li><Link to={"story/history"}>이달의 맛 히스토리</Link></li>
            <li><Link to={"story/be_better"}>Be Better</Link></li>
          </ol>
        </li>
        <li>
          <p onClick={handleMobileMenuClick}>Delivery</p>
          <ol>
            <li><Link to={"/store/delivery"}>배달주문</Link></li>
            <li><Link to={"/store/catering"}>단체주문</Link></li>
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
