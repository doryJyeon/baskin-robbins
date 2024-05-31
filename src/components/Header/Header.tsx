import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { HeaderContainer, HeaderWrapper, LogoImage, MenuDetailWrapper, MenuWrapper, SearchDiv, SearchWrapper, SignWrapper } from "./style"
import { FaArrowRightFromBracket, FaRegCircleXmark, FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const login = false;  // global
  const [scroll, setScroll] = useState(false);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState<[boolean, string]>([false, ""]);

  const isRoot = location.pathname === '/';
  const handleScroll = () => window.pageYOffset > 30 ? setScroll(true) : setScroll(false)

  const searchInput = document.querySelector<HTMLInputElement>('input[name="searchText"]');

  useEffect(() => {
    !isRoot
      ? setScroll(true)
      : window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isRoot])

  // menu hover
  const handleMouseOver = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const menuPath = event.currentTarget.getAttribute('href')?.split("/")[1] || "";
    setMenu([true, menuPath]);
    setScroll(true);
  };
  const handleMouseLeave = () => {
    setMenu([false, ""]);
    setScroll(false);
  };

  // search show/hide
  const handleFocusSearch = () => {
    setMenu([false, ""]);
    setScroll(true);
    setSearch(true);

    searchInput!.focus();
  }
  const handleBlurSearch = () => {
    isRoot && setScroll(false);
    setSearch(false);
  }

  // search enter key
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 Enter 동작 방지
      const submitButton = document.querySelector<HTMLButtonElement>('button.submit');
      if (searchInput!.value.trim()) submitButton?.click();
    }
  };

  return (
    <HeaderWrapper show={scroll}>
      <HeaderContainer>
        <Link to="/" onMouseOver={handleMouseLeave}>
          <LogoImage src={`/images/logos/${scroll ? "h_logo_2" : "h_logo"}.png`} alt="logo" />
        </Link>

        <MenuWrapper show={scroll}>
          <Link to={"/menu"} onMouseOver={handleMouseOver}>Menu</Link>
          <Link to={"/play/event/all"} onMouseOver={handleMouseOver}>BR Play</Link>
          <Link to={"/story/history"} onMouseOver={handleMouseOver}>BR Story</Link>
          <Link to={"/store/dellvery"} onMouseOver={handleMouseOver}>Dellvery</Link>
        </MenuWrapper>

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
              <Link to={"/store/dellvery"}>Dellvery</Link>
              <p>
                <Link to={"/store/dellvery"}>배달주문</Link>
                <Link to={"/store/catering"}>단체주문</Link>
              </p>
            </li>
          </ol>
        </li>
      </MenuDetailWrapper>

      <SearchDiv show={search}>
        <form action="/search" >
          <input
            type="text"
            name="searchText"
            placeholder="제품명을 입력하세요"
            onKeyDown={handleKeyDown}
          />
          <button className="cancel" type="button" onClick={handleBlurSearch}><FaRegCircleXmark /></button>
          <button className="submit" type="submit"><FaSearch /></button>
        </form>
      </SearchDiv>
    </HeaderWrapper>
  )
}

export default Header
