import { styled } from "styled-components"

export const colors = {
  primary: "#f986bd",
  light: "#ffe4ea",
  deep: "#ff5484",
  bg: "#f4e8df",
  dark: "#1c1b18",
  sand: "#d9bb97",
  font: "#666"
}

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

export const InnerContainer = styled(Container)`
  padding: 80px 0 100px;
`