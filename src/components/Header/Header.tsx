import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { HeaderContainer, HeaderWrapper, LogoImage, MenuWrapper, SearchWrapper, SignWrapper } from "./style"
import { FaArrowRightFromBracket, FaUser } from "react-icons/fa6";

const Header = () => {
  const login = false;  // global
  const [scroll, setScroll] = useState(false);

  const isRoot = location.pathname === '/';
  const handleScroll = () => window.pageYOffset > 30 ? setScroll(true) : setScroll(false)

  useEffect(() => {
    !isRoot
      ? setScroll(true)
      : window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isRoot])


  return (
    <HeaderWrapper scroll={scroll}>
      <HeaderContainer>
        <Link to="/">
          <LogoImage src={`/images/logos/${scroll ? "h_logo_2" : "h_logo"}.png`} alt="logo" />
        </Link>

        <MenuWrapper scroll={scroll}>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/play/event/all"}>BR Play</Link>
          <Link to={"/story"}>BR Story</Link>
        </MenuWrapper>

        <SearchWrapper
          scroll={scroll}
          type="text"
          onFocus={() => setScroll(true)}
          onBlur={() => setScroll(false)}
          placeholder="제품명 검색"
        />

        <SignWrapper scroll={scroll}>
          {login
            ? <Link to={"/signout"}><FaArrowRightFromBracket /></Link>
            : <Link to={"/signin"}><FaUser /></Link>
          }
        </SignWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
