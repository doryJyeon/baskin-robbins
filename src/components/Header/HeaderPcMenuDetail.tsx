import { useEffect } from "react";
import { Link } from "react-router-dom"
import { MenuDetailWrapper } from "./style"
import useHeaderStore from "../../store/useHeaderStore";

const HeaderPcMenuDetail = () => {
  const { hoverMenu, checkBgColored, checkHoverMenu } = useHeaderStore();

  useEffect(() => {

  }, [hoverMenu]);

  const handleMouseLeave = () => {
    // 메뉴 초기화
    checkHoverMenu("");
    // 스크롤 초기화 false
    checkBgColored(false);
  };

  return (
    <MenuDetailWrapper show={hoverMenu[0]} menuType={hoverMenu[1]} onMouseLeave={handleMouseLeave}>
      <li className="menu__menu">
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
      <li className="menu__play">
        <ol>
          <li>
            <Link to={"/play/event/all"}>이벤트</Link>
            <p>
              <Link to={"/play/event/promotion"}>프로모션</Link>
              <Link to={"/play/event/benefit"}>제휴혜택</Link>
            </p>
          </li>
          <li className="dashed_left">
            <Link to={"/play/plaza"}>BR Play</Link>
            <p>
              <Link to={"/play/plaza"}>배라광장</Link>
            </p>
          </li>
        </ol>
      </li>
      <li className="menu__story">
        <ol>
          <li><Link to={"story/history"}>이달의 맛 히스토리</Link></li>
          <li><Link to={"story/be_better"}>Be Better</Link></li>
        </ol>
      </li>
      <li className="menu__store">
        <ol>
          <li>
            <Link to={"/store/delivery"}>Delivery</Link>
            <p>
              <Link to={"/store/delivery"}>배달주문</Link>
              <Link to={"/store/catering"}>단체주문</Link>
            </p>
          </li>
        </ol>
      </li>
    </MenuDetailWrapper>
  )
}

export default HeaderPcMenuDetail
