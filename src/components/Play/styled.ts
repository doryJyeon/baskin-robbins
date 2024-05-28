import { styled } from "styled-components";
import { colors } from "../../styles/GlobalStyle";

interface EventStyledProps {
  isBenefit: boolean;
}

interface PlazaStyledProps {
  bgColor?: string;
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

// event type ---------------------------------
export const EventTypeWrapper = styled.ul`
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
`

// event items --------------------------
export const EventWrapper = styled.ul`
  width: 100%;
  height: fit-content;
  margin-bottom: 50px;
  display: grid;
  grid: auto / repeat(2, 1fr);
  gap: 0 50px;
`

export const EventDiv = styled.li<EventStyledProps>`
  width: 100%;
  max-height: 295px;
  border: 1px solid ${colors.border};
  margin-top: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;

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
      background-color: ${colors.primary};
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

    > div {
      width: 100%;
      max-width: 295px;
      height: 100%;
      max-height: 295px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 12px;
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
`
// event items -------------------------- end

// plaza detail -----------------------------
export const PlazaWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`
export const PlazaDetail = styled.div<PlazaStyledProps>`
  width: 33%;
  height: 275px;
  border-radius: 10px;
  text-align: center;
  background-color: ${props => props.bgColor || colors.light};
  padding-top: 57.5px;
  box-sizing: border-box;

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
    color: #fff;
    background-color: ${colors.redbtn};
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 400;
    display: inline-block;
  }
  > a:nth-of-type(2) {
    background-color: #fff;
    color: ${colors.redbtn};
    margin-left: 10px;
  }
`
// plaza detail ------------------------- end