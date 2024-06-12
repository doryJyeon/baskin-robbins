import { styled } from "styled-components";
import { colors } from "../../styles/GlobalStyle";
import { Link } from "react-router-dom";

interface EventStyledProps {
  isBenefit: boolean;
}

interface PlazaStyledProps {
  bgColor?: string;
}

// event items --------------------------
export const EventWrapper = styled.ul`
  width: 100%;
  height: fit-content;
  margin-bottom: 50px;
  display: grid;
  grid: auto / repeat(2, 1fr);
  gap: 0 50px;

  @media (max-width: 999px) {
    grid: auto / 1fr;
    margin-bottom: 0;

    > li:first-of-type {
      margin-top: 37px;
    }
  }
`

export const EventLink = styled(Link) <EventStyledProps>`
  width: 100%;
  max-height: 295px;
  border: 1px solid ${colors.border};
  margin-top: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;

  > div:first-of-type {
    width: 41%;
    height: 100%;
    max-width: 295px;
    position: relative;
    overflow: hidden;

    > p {
      position: absolute;
      width: 70px;
      height: 34px;
      background-color: ${colors.deep};
      padding-top: 36px;
      border-radius: 100%;
      font-size: 1rem;
      text-align: center;
      color: #fff;
      top: -30px;
      right: 10px;
      line-height: 1;
      z-index: 5;
    }

    > img {
      width: 100%;
      height: 100%;
      max-width: 295px;
      display: block;
      border-radius: 12px;
      z-index: 1;
    }
  }

  > div:last-of-type {
    padding: 0 15px 0 6%;
    width: 59%;

    > p {
      font-size: .95rem;
      color: ${colors.font};
    }
    /* event type */
    > p:first-of-type {
      color: ${props => props.isBenefit ? colors.primary : "#65c8ff"};
      font-weight: 500;
      margin-bottom: 8px;
    }

    > h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 1270px) {
    > div:last-of-type > h3 {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 999px) {
    max-height: 160px;
    margin-top: 14px;

    > div:first-of-type {
      max-width: 160px;

      > p {
        width: 38px;
        height: 20px;
        padding-top: 18px;
        font-size: .625rem;
        top: -14px;
        right: 8px;
      }

      > img {
        max-width: 160px;
      }
    }

    > div:last-of-type {
      padding: 0 16px;
      min-width: 59%;
      width: calc(100% - 160px);

      > p {
        font-size: .75rem;
      }
      > h3 {
        font-size: .875rem;
        font-weight: 500;
        margin-bottom: 8px;
      }
    }
  }
`

export const EventDetailWrapper = styled.section`
  width: 100%;
  text-align: center;

  > p {
    font-size: 1.25rem;

    &.event__date {
      margin-top: 10px;
      font-size: 1.1rem;
      color: ${colors.font};
    }
  }
  > h2 {
    font-size: 2rem;
    margin-top: 10px;
  }
  > hr {
    width: 100%;
    height: 1px;
    background-color: ${colors.border};
    border: none;
    margin: 45px auto 0;

    &.only__mobile {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
  > img {
    max-width: 900px;
    margin-top: 50px;
  }

  @media (max-width: 999px) {
    > p {
      font-size: 1.1rem;

      &.event__date {
        font-size: .875rem;
      }
    }
    > h2 {
      font-size: 1.5rem;
    }
    > img {
      max-width: 100%;
    }
    > a.large {
      width: 70%;
      min-height: 44px;
      line-height: 44px;
      font-size: 1.2rem;
    }
  }
`
// event items -------------------------- end

// plaza detail -----------------------------
export const PlazaWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 999px) {
    flex-direction: column;
    gap: 14px;
  }
`
export const PlazaDetail = styled.div<PlazaStyledProps>`
  width: 33%;
  height: 275px;
  border-radius: 10px;
  text-align: center;
  background-color: ${props => props.bgColor || colors.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.font};
  }

  > h2 {
    color: ${colors.hotpink};
    font-size: 2rem;
    font-weight: 700;
    margin-top: 15px;
  }
  > a {
    margin-top: 10px;
    display: inline-block;
  }

  > div {
    > a {
      margin-top: 10px;
      display: inline-block;
    }
    > a:nth-of-type(2) {
      margin-left: 10px;
    }
  }

  @media (max-width: 1160px) {
    > h2 {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 999px) {
    width: 100%;
    height: 155px;

    > p {
      font-size: .75rem;
    }

    > h2 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-top: 5px;
    }
    > a, > div > a {
      margin-top: 12px;
      min-height: 36px;
      min-width: 110px;
      font-size: .75rem;
      line-height: 36px;
    }
  }
`
// plaza detail ------------------------- end