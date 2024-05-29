import { styled } from "styled-components";
import { colors } from "../../styles/GlobalStyle";

interface HistoryMenuWrapper {
  show: "year" | "thema";
}
interface MenuThema {
  icon: string;
  active: boolean;
}

// type ---------------------------------
export const TypeWrapper = styled.ul`
  width: 100%;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 0;
  border-bottom: 1px solid ${colors.border};

  > li {
    width: 204px;
    height: 100%;
    border: 1px solid ${colors.border};
    border-bottom: none;
    border-radius: 16px 16px 0 0;
    margin-bottom: -1px;
    margin-left: -1px;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${colors.disabled};
    line-height: 60px;
    text-align: center;

    &.active {
      border-bottom: 1px solid #fff;
      color: ${colors.dark};
    }
  }
`

export const HistoryMenuWrapper = styled.div<HistoryMenuWrapper>`
  width: 100%;
  margin: 50px auto 100px;

  > ul {
    width: 100%;
    display: flex;
    gap: 0;
    justify-content: center;
    align-items: center;

    > li {
      padding: 0 20px;
      color: ${colors.font};
      font-size: 1.15rem;
      position: relative;
      line-height: 1;
      transition: all .25s linear;
      cursor: pointer;

      &:after {
        content: "";
        width: 1px;
        height: 1.1rem;
        background-color: ${colors.disabled};
        position: absolute;
        top: 0;
        right: 0;
      }
      &:last-of-type:after {
        width: 0;
      }
    }
    &.menu__year {
      > li.active {
        font-size: 2rem;
        font-weight: 500;
        color: ${colors.dark};
        line-height: .8rem;
      }
    }

    &.menu__year {
      display: ${props => props.show === "year" ? "flex" : "none"};
    }
    &.menu__thema {
      display: ${props => props.show === "thema" ? "flex" : "none"};

      > li {
        padding: 0 30px 0 70px;
        font-weight: 600;
      }
    }
  }
`

export const MenuThema = styled.li<MenuThema>`
  filter: grayscale(1);
  ${props => props.active && (`
    filter: grayscale(0);
    color: ${colors.dark} !important;
  `)}

  &:before {
    content: "";
    width: 33px;
    height: 33px;
    background-image: ${props => props.icon ? `url("/images/icons/${props.icon}.png")` : `url("/images/icons/icon_bullet_active.png")`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 28px;
    margin-top: -9px;
  }
  &:hover {
    filter: grayscale(0);
    color: ${colors.dark} !important;
  }
`

export const HistoryImgWrapper = styled.ol`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0;

  > img {
    width: 20%;
    max-width: 300px;
    height: auto;
  }
`