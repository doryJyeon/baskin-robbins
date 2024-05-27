import { styled } from "styled-components";
import { colors } from "../../styles/GlobalStyle";

interface StyledProps {
  color: string;
  bgColor: string;
  tagColor: string;
}

export const MenuLinkWrapper = styled.ul`
  text-align: center;
  width: 100%;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};

  li {
    position: relative;
    height: 100%;
    font-size: 1rem;
    font-weight: 600;
    
    &::before {
      content: "";
      width: 1px;
      height: 1rem;
      margin-top: .3rem;
      background-color: ${colors.primary};
      position: absolute;
      left: 0;
    }
    &:first-of-type::before {
      content: "";
      width: 0;
    }

    &.active {
      background-color: ${colors.primary};
      color: #fff;
      border-radius: 3px;
    }
    &.active+::before {
      content: "";
      width: 0;
    }

    > a {
      margin: 0 25px;
    }
  }
`

export const MenusWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 50px 0;
  text-align: center;
  color: ${colors.primary};

  > h2 {
    font-size: 5rem;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 50px;
  }
  > p {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 100px;
  }
`

// flavor of month style -----
export const FlavorMonth = styled.div`
  width: 100%;
  max-width: 1032px;
  margin: 80px auto 0;
  color: ${colors.dark};

  > article {
    padding: 60px 0 50px;
    border: 1px solid #d4d4d4;
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
      background-color: #d4d4d4;
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
    border: 1px solid #d4d4d4;
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