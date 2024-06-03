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
`

// flavor of month style -----
export const FlavorMonth = styled.div`
  width: 100%;
  max-width: 1032px;
  margin: 80px auto 0;
  color: ${colors.dark};

  > article {
    padding: 60px 0 50px;
    border: 1px solid ${colors.border};
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
`
// flavor of month style ----- end


// menus style ---------------
export const MenusUl = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  gap: 0 3.5%;
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
      margin: 5% auto 0;
      transition: all .23s linear;

      &.new__icon {

      }
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
  &:hover {
    > div {
      background-color: ${props => props.bgColor || "#fff"};

      > p {
        color: ${props => props.tagColor || colors.font};
        opacity: 1;
        height: fit-content;
      }

      > img {
        width: 95%;
        top: 35%;
      }
    }

    > p {
      color: ${props => props.color || "#999"};
    }
  }
`
// menus style --------------- end