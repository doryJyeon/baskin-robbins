import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { HeaderContainer, HeaderWrapper, LogoImage, SearchWrapper, SignWrapper } from "./style"
import { FaArrowRightFromBracket, FaUser } from "react-icons/fa6";
import { throttle } from "lodash";
import useMobileStore from "../../store/useMobileStore";
import HeaderMobileMenuDetail from "./HeaderMobileMenuDetail";
import HeaderPcMenuDetail from "./HeaderPcMenuDetail";
import HeaderPcMenu from "./HeaderPcMenu";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderSearchDiv from "./HeaderSearchDiv";
import useHeaderStore from "../../store/useHeaderStore";

const Header = () => {
  const login = false;
  const { isMobile, checkIsMobile } = useMobileStore();
  const { isRoot, headerShow, bgColored, searching, checkSearching, checkBgColored, checkHoverMenu, checkHeaderShow } = useHeaderStore((state) => state);

  const [prevScroll, setPrevScroll] = useState(0);  // mobile scroll check
  const searchInput = document.querySelector<HTMLInputElement>('input[name="searchText"]');

  useEffect(() => {
    // window resize >> mobile size check
    const handleResize = () => {
      checkIsMobile(window.innerWidth < 1000)
      isMobile && !searching && checkHeaderShow(false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const useCheckHeaderShow = () => {
    const currentScrollY = window.scrollY;

    prevScroll > currentScrollY
      ? checkHeaderShow(true)
      : checkHeaderShow(false);

    setPrevScroll(currentScrollY);
  }

  const handleScroll = throttle(() => {
    // mobile show / hide check
    if (isMobile) {
      useCheckHeaderShow();
    }

    // bg check
    checkBgColored();
  }, 100);

  useEffect(() => {
    isRoot && window.scrollY === 0 && checkBgColored(false);

    // window scroll >> header bg check & mobile header show / hide check
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isRoot, prevScroll]);


  // logo hover >> menu leave
  const handleMouseLeave = () => {
    checkHoverMenu("");
    checkBgColored();
  };

  // search show/hide
  const handleFocusSearch = () => {
    checkHoverMenu("");
    checkBgColored(true);
    checkSearching(true);

    searchInput!.focus();
  }

  return (
    <HeaderWrapper className={headerShow} show={bgColored}>
      <HeaderContainer>
        <Link to="/" onMouseOver={handleMouseLeave}>
          <LogoImage className="only__pc" src={`/images/logos/${bgColored ? "h_logo_2" : "h_logo"}.png`} alt="logo" />
          <LogoImage className="only__mobile" src={`/images/logos/${bgColored ? "h_logo_white" : "h_logo"}.png`} alt="logo" />
        </Link>

        {/* menu */}
        {isMobile ? (
          <HeaderMobileMenu />
        ) : (
          <HeaderPcMenu />
        )}

        <SearchWrapper
          show={bgColored}
          onClick={handleFocusSearch}
        />

        <SignWrapper show={bgColored} onMouseOver={handleMouseLeave}>
          {login
            ? <Link to={"/signout"}><FaArrowRightFromBracket /></Link>
            : <Link to={"/signin"}><FaUser /></Link>
          }
        </SignWrapper>
      </HeaderContainer>

      {/* menu detail */}
      {isMobile ? (
        <HeaderMobileMenuDetail />
      ) : (
        <HeaderPcMenuDetail />
      )}

      <HeaderSearchDiv />
    </HeaderWrapper >
  )
}

export default Header
