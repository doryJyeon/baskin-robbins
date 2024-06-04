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
        padding: 0 30px 0 67px;
        font-weight: 600;
      }
    }
  }
  > div.menu__year__mobile {
    display: none;
  }
  
  @media (max-width: 999px) {
    margin: 34px auto 48px;
    
    > ul {
      display: block;
      white-space: nowrap;
      overflow-y: hidden;
      overflow-x: auto;
      height: 38px;
      
      > li {
        padding: 0 20px;
        font-size: 1.1rem;
      }
      > li:first-of-type {
        margin-left: 33px;
      }

      &.menu__year {
        display: none;
      }
      &.menu__thema {
        display: ${props => props.show === "thema" ? "flex" : "none"};
      }
    }  
    > div.menu__year__mobile {
      display: ${props => props.show === "year" ? "flex" : "none"};
      justify-content: center;
      align-items: center;
      color: #444;

      > div {
        border-bottom: 3px solid #444;

        > select {
          border: none;
          outline: none;
          font-size: 1.875rem;
          color: #444;
          font-weight: 600;
          padding-right: 10px;
          margin: 0 0 0 15px;
        }
      }
      > span {
        padding-left: 10px;
        font-size: 1.25rem;
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
  
  @media (max-width: 1100px) {
    > img {
      width: 25%;
    }
  }
  @media (max-width: 900px) {
    > img {
      width: 33.3333%;
    }
  }
  @media (max-width: 600px) {
    > img {
      width: 50%;
    }
  }
`
// flavor history ----------------------- end

// be better ----------------------------
export const BetterWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media (max-width: 1160px) {
    > div {
      > h3 {
        font-size: 2rem;
      }
      > p {
        font-size: 1.3rem;
        margin-top: 15px;
      }
      > p.small {
        margin-top: 15px;
      }
      
      > ul {
        padding-left: 30px;
        > li {
          min-height: 26px;
          font-weight: 500;
        }
      }
    }
  }
  @media (max-width: 1060px) {
    > div {
      > p {
        margin-top: 10px;
      }
      > p.small {
        margin-top: 5px;
      }
    }
  }
  @media (max-width: 999px) {
    max-width: 533px;
    flex-direction: column;
    gap: 34px;
    border-radius: 10px;
    padding: 0;
    margin-top: 67px;
    
    > img {
      width: 100%;
      max-width: auto;
    }
    
    > div {
      padding: 0 17px 23px;
      margin: 0;

      > h3 {
        font-size: 1.875rem;
      }
      > p {
        font-size: 1.05rem;
        margin-top: 24px;
      }
      > p.small {
        font-size: .875rem;
        margin-top: 14px;
        margin-bottom: 20px;
      }

      > ul {
        padding-left: 0;
        > li {
          padding-left: 26px;
          font-size: .6875rem;
          min-height: 26px;
          list-style: none;
          background-image: url("/images/icons/icon_check.jpg");
          background-size: auto 15px;
          background-repeat: no-repeat;
          background-position: 0 0;
          font-weight: 500;
        }
      }
    }
  }

`

// be better ---------------------------- end