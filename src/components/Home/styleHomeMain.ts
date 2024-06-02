import { styled } from "styled-components";
import { Container } from "../../styles/GlobalStyle";

export const HomeWrapper = styled(Container)`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 0;

  > img {
    max-width: 100%;
  }
`;

export const HomeImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: fit-content;

  > img {
    max-width: 100%;
    height: auto;
  }
`

export const EventWrapper = styled.div`
  width: 20.53%;
  height: 89%;
  box-sizing: border-box;
  position: absolute;
  top: 5.3%;
  right: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1%;

  > a {
    width: 100%;
    height: fit-content;
    text-align: right;

    > img {
      width: 100%;
      max-width: 308px;
      height: auto;
      max-height: 100%;
    }
  }
`
