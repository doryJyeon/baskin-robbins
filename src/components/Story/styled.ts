import { styled } from "styled-components";
import { betterColor, colors } from "../../styles/GlobalStyle";

interface HistoryMenuWrapper {
  show: "year" | "thema";
}
interface MenuThema {
  icon: string;
  active: boolean;
}

// flavor history -----------------------
// type ---------------------------------
// type menu style은 global에 있음
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
// flavor history ----------------------- end

// be better ----------------------------
export const BetterWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Better = styled.article`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 3.6%;
  align-items: center;
  border: 1px solid #e6ded1;
  padding-right: 10px;
  border-radius: 20px;
  margin-top: 50px;
  &:first-of-type {
    margin-top: 0;
  }

  > img {
    width: 45.53%;
    max-width: 533px;
    height: auto;
    display: block;
  }

  > div {
    margin: 15px 0 15px;

    > h3 {
      font-size: 3.125rem;
      font-weight: 600;
    }
    > p {
      font-size: 1.5rem;
      color: ${colors.dark};
      margin-top: 30px;
      line-height: 1;
      word-break: keep-all;
    }
    > p.small {
      font-size: .95rem;
      color: ${colors.font};
      line-height: 1.6;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    > ul {
      padding-left: 40px;
      > li {
        font-size: 1rem;
        min-height: 33px;
        list-style: url("/images/icons/icon_check.jpg");
        font-weight: 600;
      }
    }
    
    .brown {
      color: ${betterColor.brown};
    }
    .pink {
      color: ${betterColor.pink};
    }
    .green {
      color: ${betterColor.green};
    }
  }
`

// be better ---------------------------- end