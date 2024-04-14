import { styled } from "styled-components"

export const colors = {
  primary: "#f986bd",
  light: "#ffe4ea",
  deep: "#ff5484",
  bg: "#f4e8df",
  dark: "#1c1b18"
}

export const Container = styled.div`
  max-width: 1500px;
  height: fit-content;
  width: 90%;
  margin: 20px auto;

  @media (max-width: 980px) {
    max-width: 550px;
    width: 90%;
  }
`;

export const InnerContainer = styled(Container)`
  display: flex;
  align-items: center;
`
export const InnerContainerFirst = styled(InnerContainer)`
  margin-top: 0px;
  padding-top: 110px;
`
