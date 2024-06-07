import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { HeaderContainer, HeaderWrapper, LogoImage, MenuDetailWrapper, MenuWrapper, MobileGiftSection, MobileMenuDetailWrapper, MobileMenuIcon, MobileMenuWrapper, SearchDiv, SearchWrapper, Searchform, SignWrapper } from "./style"
import { FaArrowRightFromBracket, FaRegCircleXmark, FaRegRectangleXmark, FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { handleKeyDownEnter, handleSubitCheckSearchValue } from "../../utils/utilityFunctions";
import MoveImg from "../common/MoveImg";
import { throttle } from "lodash";

const Header = () => {
  const login = false;  // global
  const isRoot = location.pathname === '/';
  const [scroll, setScroll] = useState(!isRoot);  // header bg check
  const [prevScroll, setPrevScroll] = useState(0);  // mobile scroll check
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState<[boolean, string]>([false, ""]);
  const [mobileMenu, setMobileMenu] = useState(false);

  const searchInput = document.querySelector<HTMLInputElement>('input[name="searchText"]');

  const handleScroll = throttle(() => {
    let cutHeight = 30;
    // only mobile, 아래 스크롤 시 header hide
    const currentScrollY = window.scrollY;
    if (window.innerWidth < 1000) {
      currentScrollY > prevScroll
        ? document.querySelector("header")?.setAttribute("class", "hide")
        : document.querySelector("header")?.classList.remove("hide")
    } else {
      cutHeight = 1;
      document.querySelector("header")?.classList.remove("hide");
    }
    setPrevScroll(currentScrollY);

    // pc & mobile
    // 메인 제외 모든 페이지에서 bg-color: show, 메인에서 스크롤 상단만 투명유지
    !isRoot
      ? setScroll(true)
      : window.pageYOffset > cutHeight
        ? setScroll(true)
        : setScroll(false)
  }, 1000);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isRoot, window.scrollY])

  // menu hover
  const handleMouseOver = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const menuPath = event.currentTarget.getAttribute('href')?.split("/")[1] || "";
    setMenu([true, menuPath]);
    setScroll(true);
  };
  const handleMouseLeave = () => {
    setMenu([false, ""]);
    handleScroll();
  };

  // search show/hide
  const handleFocusSearch = () => {
    setMenu([false, ""]);
    setScroll(true);
    setSearch(true);

    searchInput!.focus();
  }
  const handleBlurSearch = () => {
    setSearch(false);
    handleScroll();
  }

  // mobile menu show / hide 
  const handleMobileMenuShow = (event: React.MouseEvent<HTMLButtonElement>) => {
    const thisTarget = event.currentTarget;
    thisTarget.classList.toggle("active")

    // menu open
    setMobileMenu(thisTarget.classList.contains("active"))
    // header bg color
    thisTarget.classList.contains("active") ? setScroll(true) : handleScroll();
  }

  // mobile menu li controll
  const handleMobileMenuClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const pElement = event.currentTarget;
    const parentLi = pElement.closest('li');

    if (parentLi) parentLi.classList.toggle("active")
  }

  return (
    <HeaderWrapper className="hide" show={scroll}>
      <HeaderContainer>
        <Link to="/" onMouseOver={handleMouseLeave}>
          <LogoImage className="only__pc" src={`/images/logos/${scroll ? "h_logo_2" : "h_logo"}.png`} alt="logo" />
          <LogoImage className="only__mobile" src={`/images/logos/${scroll ? "h_logo_white" : "h_logo"}.png`} alt="logo" />
        </Link>

        <MenuWrapper show={scroll}>
          <Link to={"/menu"} onMouseOver={handleMouseOver}>Menu</Link>
          <Link to={"/play/event/all"} onMouseOver={handleMouseOver}>BR Play</Link>
          <Link to={"/story/history"} onMouseOver={handleMouseOver}>BR Story</Link>
          <Link to={"/store/delivery"} onMouseOver={handleMouseOver}>Delivery</Link>
        </MenuWrapper>

        <MobileMenuIcon show={scroll} onClick={handleMobileMenuShow}>
          <div className="menu__mobile__line"></div>
          <div className="menu__mobile__line"></div>
          <div className="menu__mobile__line"></div>
        </MobileMenuIcon>

        <SearchWrapper
          show={scroll}
          onClick={handleFocusSearch}
        />

        <SignWrapper show={scroll} onMouseOver={handleMouseLeave}>
          {login
            ? <Link to={"/signout"}><FaArrowRightFromBracket /></Link>
            : <Link to={"/signin"}><FaUser /></Link>
          }
        </SignWrapper>
      </HeaderContainer>

      {/* pc web menu */}
      <MenuDetailWrapper show={menu[0]} menuType={menu[1]} onMouseLeave={handleMouseLeave}>
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

      {/* mobile menu */}
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

      <SearchDiv show={search}>
        <button onClick={handleBlurSearch}>
          <FaRegRectangleXmark />&nbsp;close
        </button>
        <Searchform action="/search" >
          <input
            type="text"
            name="searchText"
            placeholder="제품명을 입력하세요"
            onKeyDown={handleKeyDownEnter}
            onBlur={handleBlurSearch}
          />
          <button className="cancel" type="button" onClick={handleBlurSearch}><FaRegCircleXmark /></button>
          <button className="submit" type="submit" onClick={handleSubitCheckSearchValue}><FaSearch /></button>
        </Searchform>
      </SearchDiv>
    </HeaderWrapper>
  )
}

export default Header
