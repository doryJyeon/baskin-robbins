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

  @media (max-width: 999px) {
    display: none;
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

export const MobileHomeImg = styled.div`
  
  width: 94vw;
  padding: 57px 3vw 0;
  position: relative;
  height: fit-content;
  text-align: center;

  > div {
    margin-top: 57px;

    > img.hero__frame {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: auto;
      margin: 0 auto;
    }

    > img.hero__content {
      width: 92%;
      height: auto;
    }
  }
  @media (min-width: 600px) {
    > div {
      > img.hero__frame {
        width: 500px;
      }

      > img.hero__content {
        width: 435.15px;
      }
    }
  }
  @media (min-width: 1000px) {
    display: none;
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
