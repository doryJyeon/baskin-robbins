import { styled } from "styled-components";
import { InnerContainer } from "../../styles/GlobalStyle";
import { Link } from "react-router-dom";

export const HomeWrapper = styled(InnerContainer)`
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
  width: 27%;
  height: 89%;
  box-sizing: border-box;
  position: absolute;
  top: 5%;
  right: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Event = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 33%;
  padding: 5px 15px;
  box-sizing: border-box;
  word-break: keep-all;
  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    width: 25%;
  }
  > p {
    font-size: 1rem;

    &.small {
      font-size: 0.8rem;
      margin-bottom: 3px;
    }
  }

  &:nth-of-type(1) {
    background: #fff889;
    border-radius: 140px 140px 4px 4px;

    > img {
      top: 20px;
      right: 35%;
    }
    p.small {
      margin-top: 75px;
    }
  }
  &:nth-of-type(2) {
    background: #f986bc;
    border-radius: 4px;

    > img {
      top: 40%;
      right: 8%;
      transform: rotateY(-180deg);
    }
    p.small {
      margin-top: 15px;
    }
  }
  &:nth-of-type(3) {
    background: #89c7f2;
    border-radius: 4px 4px 140px 4px;

    > img {
      top: 15px;
      right: 0;
      transform: rotateY(-180deg);
    }
    p.small {
      margin-top: 40px;
    }
  }
`