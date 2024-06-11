import styled from "styled-components";
import { Container, colors } from "../../styles/GlobalStyle";

const headerHeight = "90px";
const mobileHeight = "42px";

interface Props {
  show: boolean;
}
interface DetailProps {
  show: boolean;
  menuType: string;
}

export const HeaderWrapper = styled.header<Props>`
  width: 100%;
  height: ${headerHeight};
  background-color: ${props => props.show ? colors.primary : "transparent"};
  position: fixed;
  z-index: 100;
  transition: margin-top .3s;
  top: 0;
  left: 0;
  margin-top: 0;
  transition: margin-top 0.3s linear;

  @media (max-width: 999px) {
    width: 94vw;
    height: ${mobileHeight};
    padding: 0 3vw;

    &.hide {
      margin-top: -42px;
    }
  }
`;

export const HeaderContainer = styled(Container)`
  margin: auto;
  height: ${headerHeight};
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 999px) {
    height: ${mobileHeight};
    gap: 10px;
  }
`

export const LogoImage = styled.img`
  width: auto;
  height: 60px;
  margin-right: 40px;
  
  @media (max-width: 999px) {
    width: 23px;
    height: auto;
    margin-right: auto;
    margin-top: 5px;
  }
`;

export const MenuWrapper = styled.div<Props>`
  > a {
    color: ${props => props.show ? "#fff" : colors.dark};
    font-size: 1rem;
    font-weight: 500;
    margin-right: 20px;
  }

  @media (max-width: 999px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.button<Props>`
  display: none;

  width: 30px;
  height: ${mobileHeight};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  outline: none;
  background-color: transparent;

  > div {
    width: 17px;
    height: 2px;
    background-color: ${props => props.show ? "#fff" : "#807168"};
    transition: all .3s linear;
  }

  @media (max-width: 999px) {
    display: flex;
    margin-left: auto;

    &.active {
      gap: 0;

      > div:nth-child(1) {
        transform: rotate(225deg);
        margin-bottom: -1px;
      }
      > div:nth-child(2) {
        display: none;
        opacity: 0;
      }
      > div:nth-child(3) {
        transform: rotate(-45deg);
        margin-top: -1px;
      }
    }
  }
`

export const SearchWrapper = styled.div<Props>`
  width: 180px;
  height: 1.5rem;
  margin-left: auto;
  border: none;
  outline: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: left top 3px;
  background-size: 1.1rem;
  padding-left: 1.4rem;
  background-image: url("/images/icons/btn_search.png");
  border-bottom: 2px solid ${colors.primary};
  cursor: pointer;
  
  ${props => props.show &&
    "border-bottom-color: #fff; background-image: url(/images/icons/btn_search_white.png);"
  }

  @media (max-width: 999px) {
    width: 30px;
    height: ${mobileHeight};
    margin-left: 0;
    padding-left: 0;
    background-image: ${props => props.show ? 'url("/images/icons/btn_search_white.png")' : 'url("/images/icons/btn_search_dark.png")'};
    background-size: auto 18px;
    background-position: center;
    border-bottom: none;
    transition: all .3s;
  }
`;

export const SignWrapper = styled.div<Props>`
  font-size: 1.8rem;
  vertical-align: bottom;

  > a {
    transition: all .3s;
    color: ${props => props.show ? "#fff" : colors.dark}
  }
  
  @media (max-width: 999px) {
    width: 30px;
    height: ${mobileHeight};
    text-align: center;

    > a {
      font-size: 1.21rem;
    }
  }
`;

export const MenuDetailWrapper = styled.ul<DetailProps>`
  width: 100%;
  height: 172px;
  background-color: #fff;
  box-shadow: 0px 4px 4px #00000020;
  display: ${props => props.show ? "block" : "none"};

  > li {
    width: 90%;
    max-width: 1500px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s linear;
    margin: 0 auto;
    padding-left: 110px;
    box-sizing: border-box;


    > ol {
      width: auto;

      > li {
        width: auto;
        color: ${colors.dark};
        margin-right: 38px;
        font-size: 1.375rem;
        font-weight: 500;
        display: inline-block;
        
        > a {
          transition: all 0.2s linear;
        }

        > p {
          position: relative;
          margin-top: 10px;

          > a {
            padding: 10px 10px 10px 0;
            color: ${colors.font};
            font-weight: 600;
            font-size: 1rem;
            margin-right: 38px;
            transition: all 0.2s linear;
          }
        }
        
        &.dashed_left {
          border-left: 1px dashed ${colors.font};
          padding-left: 90px;
        }
        &:hover > a, & > p > a:hover {
          color: ${colors.deep};
          opacity: 1;
        }
      }
    }

    &.menu__menu {
      display: ${props => props.menuType === "menu" ? "flex" : "none"};
    }
    &.menu__play {
      display: ${props => props.menuType === "play" ? "flex" : "none"};
    }
    &.menu__story {
      display: ${props => props.menuType === "story" ? "flex" : "none"};
    }
    &.menu__store {
      display: ${props => props.menuType === "store" ? "flex" : "none"};
    }
  }

  @media (max-width: 999px) {
    display: none;
  }
`
// mobile menu detail ====================================================
export const MobileMenuWrapper = styled.section<Props>`
  @media (min-width: 1000px) {
    display: none;
  }

  width: 100vw;
  height: calc(100vh - 42px);
  background-color: #fff;
  z-index: 10;
  margin-left: -3vw;
  display: ${props => props.show ? "flex" : "none"};
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow-y: auto;
`

export const MobileMenuDetailWrapper = styled.ul`
  width: 94vw;
  height: fit-content;
  max-height: calc(100% - 127px);
  background-color: transparent;
  box-shadow: none;
  padding: 10px 3vw 137px;
  overflow-y: auto;

  > li {
    width: 100%;
    min-height: 60px;
    transition: all 0.2s linear;
    margin: 0 auto;
    box-sizing: border-box;
    cursor: pointer;

    > p {
      width: 100%;
      height: 60px;
      color: ${colors.disabled};
      font-weight: 600;
      font-size: 1.3rem;
      line-height: 60px;
      position: relative;
      transition: all 0.3s linear;
      
      &:after {
        content: "";
        width: 19px;
        height: 11.5px;
        background-image: url("/images/icons/icon_site_menu.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        position: absolute;
        top: calc(50% - 5.75px);
        right: 0;
        transform: rotate(-180deg);
        filter: grayscale(1);
        opacity: .3;
      }
    }

    > ol {
      width: 100%;
      height: 0;
      opacity: 0;
      z-index: -1;
      padding: 7px 23px;
      box-sizing: border-box;
      transition: opacity 0.3s linear;

      > li {
        width: 100%;
        color: ${colors.dark};
        font-size: .95rem;
        font-weight: 500;
        display: block;
        opacity: 0;
        margin-top: 7px;
        margin-bottom: 7px;
        transition: none;
      }
    }

    /* active open */
    &.active {
      > p {
        color: ${colors.dark};
        
        &:after {
          transform: rotate(0deg);
          filter: grayscale(0);
          opacity: 1;
        }
      }

      > ol {
        height: fit-content;
        z-index: 10;
        opacity: 1;

        > li {
          opacity: 1;
          margin-top: 0;
          transition: all .3s;
        }
        > li:nth-of-type(2) {
          transition-delay: .1s;
        }
        > li:nth-of-type(3) {
          transition-delay: .2s;
        }
        > li:nth-of-type(4) {
          transition-delay: .3s;
        }
        > li:nth-of-type(5) {
          transition-delay: .4s;
        }
        > li:nth-of-type(6) {
          transition-delay: .5s;
        }
        > li:nth-of-type(7) {
          transition-delay: .6s;
        }
      }
    }
  }
`

export const MobileGiftSection = styled.section`
  width: 100%;
  height: 127px;
  padding: 14px 17px 17px;
  background-color: ${colors.primary};
  box-sizing: border-box;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  left: 0;

  > p {
    font-size: .95rem;
    color: #fff;
    font-weight: 500;
    margin-bottom: 5px;
  }

  > div {
    display: flex;
    gap: 8px;

    > a > img {
      width: 160px;
      height: 70px;
    }
  }
`
// mobile menu detail ==================================================== end

export const SearchDiv = styled.div<Props>`
  width: 100%;
  height: 120px;
  background-color: #fff;
  position: absolute;
  top: ${props => props.show ? "0" : "-90px"};
  opacity: ${props => props.show ? "1" : "0"};
  pointer-events: ${props => props.show ? "auto" : "none"};
  z-index: ${props => props.show ? "110" : "-1"};
  transition: all .3s linear;

  > button {
    position: absolute;
    top: 10px;
    right: 20px;
    border: none;
    background-color: transparent;
    font-size: 1.1rem;
    color: ${colors.font};
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  @media (max-width: 999px) {
    width: 94vw;
    height: 60px;
    top: ${props => props.show ? "0" : "-42px"};
    left: 0;
    padding: 71px 3vw 104px;

    > button {
      top: 15px;
      right: 3vw;
      font-size: .9rem;
    }
  }
`

export const Searchform = styled.form`
  width: 100%;
  max-width: 600px;
  height: 2rem;
  padding: 40px 0 8px;
  margin: auto;
  display: flex;
  border-bottom: 2px solid ${colors.dark};

  > input, > button {
    outline: none;
    border: none;
    background: transparent;
  }
  > input {
    width: 100%;
    height: 100%;
    font-size: 2rem;
    text-align: center;
    color: ${colors.dark};
  }
  > button {
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    margin-left: 1rem;
    color: ${colors.dark};
    cursor: pointer;
  }

  @media (max-width: 999px) {
    margin-top: 25px;
    height: 34px;
    padding: 0;
    align-items: baseline;

    > input {
      font-size: 1rem;
    }
    > button {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.3rem;
      margin-left: 0;
      margin-right: 0.5rem;
    }
  }
`