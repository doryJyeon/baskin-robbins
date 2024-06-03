import { styled } from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const DeliveryTitle = styled.section`
  width: 100%;
  border-top: 1px solid ${colors.border};
  margin-top: -30px;
  padding-top: 110px;
  color: ${colors.fontDark};
  font-weight: 500;
  text-align: center;
  margin-bottom: 40px;

  > h3 {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 5px;
  }
  > h4 {
    font-size: 1.8rem;
    margin-bottom: 5px;
  }
  > p {
    font-size: .95rem;
    font-weight: 400;
  }
  // MoveButton custom
  > a.large {
    padding: 0 60px 0 30px;
    font-size: 1.2rem;
    background-image: url("/images/icons/icon_arrow.png");
    background-repeat: no-repeat;
    background-position: right 30px center;
    margin-bottom: .5rem;
  }
`

export const HowToOrder = styled.section`
  max-width: 1200px;
  margin: 0 auto 180px;
  text-align: center;
  color: ${colors.fontDark};
  position: relative;

  > h4 {
    margin: 160px 0 50px;
    font-size: 1.6rem;
    font-weight: 500;
  }
  > ol.howto__img {
    display: flex;
    justify-content: center;
    gap: 35px;


    > li {
      position: relative;
      width: 306px;
      height: 306px;
      border: 1px solid ${colors.border};
      border-radius: 50%;
      background-repeat: no-repeat;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: end;
      flex-direction: column;

      > h4 {
        width: 100%;
        margin: 15px 0 10px;
        font-weight: 500;
        color: ${colors.deep};
        font-size: 1.25rem;
      }
      &:last-of-type > h4 {
        margin-top: 25px;
      }
      > p {
        font-size: .8rem;
        line-height: 1.4;
        margin-bottom: 50px;
      }
    }
    & > li:not(:last-of-type):after {
      content: "";
      width: 14px;
      height: 20px;
      position: absolute;
      right: 0;
      top: 50%;
      margin: -10px -26px 0 0;
      background-image: url("/images/icons/icon_list_arrow.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  > ul.howto__desc {
    margin-top: 30px;
    text-align: left;

    > li {
      font-size: .8rem;
      padding-left: 2px;
      list-style: "※";
      font-weight: 400;
    }
  }

  // MoveButton custom
  > a.large {
    position: absolute;
    bottom: 5px;
    right: 0;
    padding: 0 60px 0 30px;
    font-size: 1.2rem;
    background-image: url("/images/icons/icon_arrow.png");
    background-repeat: no-repeat;
    background-position: right 30px center;
  }
`

// delivery ---------------------------------
export const HappyOrderWrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  display: flex;
  gap: 30px;
  margin: 0 auto;

  > div {
    width: 33.3%;
    min-height: 247px;
    border: 1px solid ${colors.border};
    border-radius: 10px;
    padding: 18px 10px;
    color: ${colors.fontDark};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: end;

    > img {
      width: auto;
      height: auto;
      max-height: 115px;
      max-width: 163px;
      display: block;
      margin: auto;
    }
    > h4 {
      margin-bottom: 10px;
      font-size: 1.25rem;
      line-height: 1.25;
      font-weight: 600;
    }
    > p {
      font-size: .8rem;
      font-weight: 500;
      line-height: 1.3;
      word-break: keep-all;
      margin-bottom: 10px;
    }
  }
`

export const OtherAppWrapper = styled.article`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  text-align: center;
  color: ${colors.fontDark};
  
  > h3 {
    margin-top: 100px;
    grid-row: 1;
    grid-column: 1 / -1;
    margin-bottom: 5px;
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 600;
    margin-bottom: 100px;
  }

  > div {
    grid-row: 2;

    > img {
      width: 100%;
      max-width: 226px;
      height: auto;
      max-height: 226px;
      display: inline-block;
    }
    > p {
      margin: 26px 0 16px;
      font-size: 1.25rem;
      font-weight: 500;
    }
    > a {
      margin: 0 auto;
      font-size: .95rem;
    }
  }
`
// delivery --------------------------------- end

// catering ---------------------------------
export const CateringWrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 50px auto 0;
`

export const Caterings = styled.article`
  border: 1px solid ${colors.sandGray};
  border-radius: 10px;
  display: flex;
  min-height: 240px;
  margin-bottom: 14px;

  > div:first-of-type {
    width: 50%;
    min-height: 240px;
    height: 100%;
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;

    &.bg_bottom {
      background-position: center bottom;
    }
  }

  > div:nth-of-type(n+2) {
    width: 50%;

    .deep {
      color: ${colors.deep};
    }

    > p.small {
      color: ${colors.sandGray};
      margin-top: 36px;
      margin-bottom: 12px;
      font-size: .8rem;
    }
    > h4 {
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.2;
    }

    > div {
      margin-top: 24px;
      display: flex;

      > div {
        width: 50%;
        height: 100%;

        > p {
          font-size: .8rem;
          line-height: 1.3;
          font-weight: 500;

          &.round_title {
            width: 80px;
            height: 25px;
            color: #fff;
            background-color: ${colors.sandGray};
            margin-bottom: 14px;
            border-radius: 12.5px;
            line-height: 25px;
            text-align: center;
          }
        }
      }
    }
  }
`
// catering --------------------------------- end