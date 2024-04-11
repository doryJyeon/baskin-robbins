import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { HeaderContainer, HeaderWrapper, LogoImage, MenuWrapper, SearchWrapper, SignWrapper } from "./style"
import { FaArrowRightFromBracket, FaUser } from "react-icons/fa6";

const Header = () => {
  const login = false;  // global
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => window.pageYOffset > 30 ? setScroll(true) : setScroll(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  

  return (
    <HeaderWrapper scroll={scroll}>
      <HeaderContainer>
        <Link to="/">
          <LogoImage src={`/images/logos/${scroll ? "h_logo_2" : "h_logo"}.png`} alt="logo" />
        </Link>

        <MenuWrapper scroll={scroll}>
          <Link to={"/"}>Menu</Link>
          <Link to={"/order"}>Order</Link>
          <Link to={"/store"}>Store</Link>
        </MenuWrapper>

        <SearchWrapper 
          scroll={scroll} 
          type="text" 
          onFocus={() => setScroll(true)}
          onBlur={() => setScroll(false)}
          placeholder="제품명 검색" 
        />

        <SignWrapper scroll={scroll}>
          { login
          ? <Link to={"/signout"}><FaArrowRightFromBracket /></Link>
          : <Link to={"/signin"}><FaUser /></Link>
          }
        </SignWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
