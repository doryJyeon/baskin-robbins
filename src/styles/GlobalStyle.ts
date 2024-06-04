import { styled } from "styled-components"

interface MenuLinkProps {
  mobileHide?: boolean;
}
interface InnerContainerProps {
  top?: string;
  bottom?: string;
  mTop?: string;
  mBottom?: string;
}

export const colors = {
  primary: "#f986bd",
  light: "#ffe4ea",
  hotpink: "#ff5b76",
  deep: "#ff5484",
  bg: "#f4e8df",
  dark: "#1c1b18",
  sand: "#d9bb97",
  sandGray: "#c1bbaf",
  font: "#666",
  fontDark: "#41332c",
  disabled: "#b1b1b1",
  border: "#d4d4d4",
  redbtn: "#ff2a56"
}
export const betterColor = {
  pink: "#fd565a",
  brown: "#947244",
  green: "#00a000"
}

export const pointFont = '"Hahmlet", "Neuton"'

// background 
export const BgDot = styled.div`
  background-image: url("/images/main/bg_hero.jpg");
  background-size: auto;
  background-repeat: repeat;
`
export const BgLightPink = styled.div`
  background-color: ${colors.light};
`
export const BgBeige = styled.div`
  background: ${colors.bg};
`

// container
export const Container = styled.div`
  max-width: 1500px;
  height: fit-content;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 94vw;
    width: 94vw;
    position: relative;
  }
`;

export const InnerContainer = styled(Container) <InnerContainerProps>`
  padding-top: ${props => props.top ? props.top : "80px"};
  padding-bottom: ${props => props.bottom ? props.bottom : "100px"};

  @media (max-width: 999px) {
    padding-top: ${props => props.mTop ? props.mTop : "57px"};
    padding-bottom: ${props => props.mBottom ? props.mBottom : "100px"};
  }
`

// page menu style --------------------
export const MenuLinkWrapper = styled.ul<MenuLinkProps>`
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
  
  @media (max-width: 999px) {
    width: 100vw;
    height: 47px;
    line-height: 2rem;
    display: ${props => props.mobileHide ? "none" : "inline-block"};
    white-space: nowrap;
    position: absolute;
    top: 67px;
    left: 0;
    margin-left: -3vw;
    padding-left: 20px;
    overflow-x: scroll;

    li {
      height: 32px;
      font-weight: 500;
      display: inline-block;
      margin-right: 20px;
      
      &::before {
        content: "";
        width: 0;
        height: 0;
      }

      &.active {
        border-radius: 16px;
      }

      > a {
        margin: 0 15px;
      }
    }
    li:last-of-type {
      margin-right: 40px;
    }
  }

`
// page menu style -------------------- end

// event & history & search menu detail type --------------------
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

  @media (max-width: 999px) {width: 100%;
    height: 47px;
    border: 2px solid ${colors.border};
    margin-top: 24px;

    > li {
      flex-grow: 1;
      width: auto;
      height: 100%;
      border: none;
      border-left: 1px solid ${colors.border};
      border-radius: 0;
      margin-bottom: 0;
      margin-left: 0;
      font-size: 1rem;
      font-weight: 400;
      line-height: 47px;
      color: ${colors.dark};

      &.active {
        border-bottom: none;
        background-color: ${colors.primary};
        color: #fff;
      }
    }
    > li:first-of-type {
      border: none;
    }
  }
`
// history & search menu detail type -------------------- end
