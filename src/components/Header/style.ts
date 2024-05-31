import styled from "styled-components";
import { Container, colors } from "../../styles/GlobalStyle";

const headerHeight = "90px";

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
`;

export const HeaderContainer = styled(Container)`
  margin: auto;
  height: ${headerHeight};
  display: flex;
  align-items: center;
  gap: 20px;
`

export const LogoImage = styled.img`
  width: auto;
  height: 60px;
  margin-right: 40px;
`;

export const MenuWrapper = styled.div<Props>`
  > a {
    color: ${props => props.show ? "#fff" : colors.dark};
    font-size: 1rem;
    font-weight: 500;
    margin-right: 20px;
  }
`;

export const SearchWrapper = styled.div<Props>`
  width: 180px;
  height: 1.5rem;
  margin-left: auto;
  border: none;
  outline: none;
  font-size: 1.1rem;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: left top 3px;
  background-size: 1.1rem;
  padding-left: 1.4rem;
  background-image: url("/images/icons/btn_search.png");
  border-bottom: 2px solid ${colors.primary};
  color: ${colors.dark};
  cursor: pointer;
  
  ${props => props.show &&
    "border-bottom-color: #fff; background-image: url(/images/icons/btn_search_white.png);"
  }
`;

export const SignWrapper = styled.div<Props>`
  font-size: 1.8rem;
  vertical-align: bottom;

  > a {
    color: ${props => props.show ? "#fff" : colors.dark}
  }
`;

export const MenuDetailWrapper = styled.ul<DetailProps>`
  width: calc(100% - 200px);
  height: 172px;
  padding: 0 100px;
  background-color: #fff;
  display: block;
  box-shadow: 0px 4px 4px #00000020;
  display: ${props => props.show ? "block" : "none"};

  > li {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    transition: all 0.2s linear;

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
`

export const SearchDiv = styled.div<Props>`
  width: 100%;
  height: 120px;
  background-color: #fff;
  position: absolute;
  top: ${props => props.show ? "0" : "100px"};
  opacity: ${props => props.show ? "1" : "0"};
  z-index: ${props => props.show ? "110" : "-1"};
  transition: all .3s linear;

  > form {
    width: 100%;
    max-width: 500px;
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
  }
`