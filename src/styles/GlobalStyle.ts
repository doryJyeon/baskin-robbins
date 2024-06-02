import { styled } from "styled-components"

interface InnerContainerProps {
  top?: string;
  bottom?: string;
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

  @media (max-width: 980px) {
    max-width: 550px;
    width: 90%;
  }
`;

export const InnerContainer = styled(Container) <InnerContainerProps>`
  padding-top: ${props => props.top ? props.top : "80px"};
  padding-bottom: ${props => props.bottom ? props.bottom : "100px"};
`

// page menu style --------------------
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
// page menu style --------------------