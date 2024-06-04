import { styled } from "styled-components";
import { colors } from "../../styles/GlobalStyle";

interface StyledProps {
  color: string;
  bgColor: string;
  tagColor: string;
}

export const MenusWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 999px) {
    margin-bottom: 0;
  }
`

// flavor of month style -----
export const FlavorMonth = styled.div`
  width: 100%;
  max-width: 1032px;
  margin: 80px auto 0;
  color: ${colors.fontDark};

  > article {
    padding: 60px 0 50px;
    border: 1px solid ${colors.border};
    border-bottom: none;
    text-align: center;

    > h4 {
      font-size: 1.8rem;
      font-weight: 600;
    }
    > h3 {
      font-size: 3rem;
      font-weight: 600;
      margin: 0 0 5px;
    }
    > p {
      font-size: 1rem;
      font-weight: 400;
    }
    > hr {
      width: 60%;
      margin: 35px auto 35px;
      height: 2px;
      border: none;
      background-color: ${colors.border};
    }
  }

  > img {
    width: 100%;
    height: auto;
  }

  > h2 {
    text-align: left;
    font-size: 1.6rem;
    font-weight: 500;
    margin: 80px 0 40px;
  }

  @media (max-width: 1160px) {
    max-width: 780px;
  }
  @media (max-width: 999px) {
    margin: 0 auto 0;

    > article {
      padding: 27px 0 40px;

      > h4 {
        font-size: .9rem;
        font-weight: 400;
      }
      > h3 {
        font-size: 1.5rem;
        font-weight: 800;
        letter-spacing: -.4px;
      }
      > p {
        font-size: .875rem;
        line-height: 1.4;
      }
      > hr {
        width: 90%;
        margin: 20px auto 27px;
        height: 2px;
      }
    }

    > h2 {
      font-size: 1.1rem;
      margin: 50px 0 37px;
    }
  }
`

export const FlavorWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  > li {
    width: auto;
    height: auto;
    
    > img {
      width: 64px;
      height: auto;
    }
    > P {
      font-size: 1rem;
      font-weight: 500;
      margin: 0;
    }
  }
  
  @media (max-width: 999px) {
    justify-content: space-around;
    gap: 20px;

    > li {
      width: 25%;
      > img {
        width: auto;
        max-width: 76.5px;
      }
      > P {
        font-size: .57rem;
        font-weight: 600;
      }
    }
  }
`

export const FlavorItemWrapper = styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;

  > li {
    width: 25%;
    height: fit-content;
    border: 1px solid ${colors.border};
    border-radius: 17px 17px 16px 16px;
    
    > img {
      width: 100%;
      border-radius: 16px;
    }
    > p {
      width: 100%;
      font-size: 1rem;
      font-weight: 600;
      margin: 20px 0 50px;
    }
  }
  @media (max-width: 999px) {
    display: block;
    white-space: nowrap;
    overflow-x: auto;

    > li {
      display: inline-block;
      width: 216px;
      height: 284px;
      margin-right: 20px;
      
      > img {
        border-radius: 10px;
      }
      > p {
        font-size: .875rem;
        margin: 0 0 0;
        padding-left: 17px;
        text-align: left;
      }
    }
    > li:last-of-type {
      margin-right: 0;
    }
  }
`
// flavor of month style ----- end


// menus style ---------------
export const MenusUl = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  gap: 0 3.5%;

  @media (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0 18px;
  }
`
export const MenuWrapper = styled.li<StyledProps>`
  width: 100%;
  height: auto;
  margin-bottom: 30px;

  > div {
    width: 100%;
    height: 210px;
    overflow: hidden;
    position: relative;
    border-radius: 45px;
    box-sizing: border-box;
    border: 1px solid #f3eee4;
    background-color: transparent;
    transition: all .23s linear;
    
    > p {
      font-weight: 500;
      font-size: 1rem;
      letter-spacing: 0.3px;
      word-break: keep-all;
      margin-top: 35px;
      padding: 0 10%;
      height: 0;
      color: transparent;
      opacity: 0;
      transition: all .23s linear;
    }

    > img {
      width: 90%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto 0;
      transition: all .23s linear;
    }

    &.new__icon:after {
      content: "";
      position: absolute;
      width: 67px;
      height: 81px;
      background-image: url('/images/icons/icon_new.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      top: 8%;
      left: 12%;
      transition: all .23s linear;
    }
  }

  > p {
    width: 100%;
    height: auto;
    margin-top: 20px;
    font-weight: 600;
    font-size: 1.1rem;
    color: #999;

    > p.menu__detail {
      font-size: .9rem;
    }
  }
  
  /* hover */
  &:hover, &:active {
    > div {
      background-color: ${props => props.bgColor || "#fff"};

      > p {
        color: ${props => props.tagColor || colors.font};
        opacity: 1;
        height: fit-content;
        z-index: 10;
      }

      > img {
        width: 95%;
        top: 35%;
        z-index: 1;
      }
    
      &.new__icon:after {
        top: 43%;
        left: 12%;
      }
    }

    > p {
      color: ${props => props.color || "#999"};
    }
  }

  /* web 반응형 */
  @media (max-width: 1270px) {
    > div  {
      > img {
        width: 95%;
        margin: 10% auto 0;
      }
      &.new__icon:after {
        width: 50.25px;
        height: 60.75px;
      }
    }
  }
  @media (max-width: 1160px) {
    > div {
      > p {
        margin-top: 20px;
        font-size: .9rem;
      }
      > img {
        width: 100%;
        margin: 15% auto 0;
      }
    }
    > p {
      font-size: 1rem;
    }
  }  
  /* mobile */
  @media (max-width: 999px) {
    > div {
      width: 100%;
      height: 155px;
      border-radius: 15px;
      
      > p {
        font-weight: 400;
        font-size: .75rem;
        margin-top: 15px;
        padding: 0 3%;
      }

      > img {
        width: auto;
        height: 100%;
        margin: 0 auto;
      }

      &.new__icon:after {
        width: 45.75px;
        height: 60.75px;
        top: 8%;
        left: 20%;
      }
    }

    > p {
      margin-top: 11px;
      font-weight: 500;
      font-size: .75rem;

      > p.menu__detail {
        font-size: .75rem;
      }
    }
    
    /* hover */
    &:hover, &:active {
      > div { 
        > img {
          width: auto;
          top: 25%;
        }
      
        &.new__icon:after {
          top: 30%;
          left: 20%;
        }
      }
    }
  }
`
// menus style --------------- end