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

  @media (max-width: 999px) {
    border-top: 2px solid ${colors.border};
    margin-top: 30px;
    padding-top: 34px;
    margin-bottom: 34px;

    > h3 {
      font-size: 1.05rem;
      margin-bottom: 12px;
    }
    > h4 {
      font-size: 1.05rem;
      margin-bottom: 12px;
    }
    > p {
      font-size: .625rem;

      &.small {
        font-size: .8rem;
      }
    }
    // MoveButton custom
    > a.large {
      min-width: 294px;
      min-height: 44px;
      padding: 0;
      font-size: 1.2rem;
      line-height: 44px;
      background-position: right 50px center;
      font-weight: 500;
      margin-top: 24px;
    }
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
  > hr {
    display: none;
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

  @media (max-width: 1100px) {
    > ol.howto__img {
      > li {
        width: 290px;
        height: 290px;
      }
    }
    > a.large {
      min-width: 160px;
      padding: 0 40px 0 20px;
      font-size: 1.2rem;
      background-position: right 20px center;
    }
  }
  @media (max-width: 999px) {
    margin: 0 auto 100px;

    > h4 {
      margin: 80px 0 44px;
      font-size: 1.05rem;
    }
    > ol.howto__img {
      flex-direction: column;
      align-items: center;
      gap: 30px;

      > li {
        width: 254px;
        height: 254px;

        > img {
          width: 30%;
          margin-bottom: 5px;
        }
        > h4 {
          margin: 10px 0 7px;
          font-size: .875rem;
        }
        &:last-of-type > h4 {
          margin-top: 25px;
        }
        > p {
          font-size: .625rem;
          margin-bottom: 40px;
          font-weight: 500;
        }
      }
      & > li:not(:last-of-type):after {
        right: 50%;
        top: 100%;
        margin: 7px -10px 0 0;
        transform: rotate(90deg);
      }
    }
    > hr {
      display: block;
      height: 1px;
      width: 100%;
      border: none;
      background-color: ${colors.border};
      margin-top: 50px;
    }
    // MoveButton custom
    > a.large {
      position: relative;
      min-width: 294px;
      min-height: 44px;
      padding: 0;
      font-size: 1.2rem;
      line-height: 44px;
      background-position: right 50px center;
      margin-bottom: 0;
      font-weight: 500;
      margin-top: 50px;
    }
    > ul.howto__desc {
      margin-left: 3vw;

      > li {
        font-size: .6875rem;
        padding-left: 1px;
        font-weight: 400;
      }
    }
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

    > div:first-of-type {
      width: 100%;
      height: 114px;
      display: flex;
      align-items: center;
      margin-bottom: 18px;

      > img {
        width: auto;
        height: auto;
        max-height: 115px;
        max-width: 163px;
        display: block;
        margin: auto;
      }
    }
    > div:last-of-type {
      text-align: center;
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
  }
  @media (max-width: 999px) {
    flex-direction: column;
    gap: 0;

    > div {
      width: 100%;
      min-height: 175px;
      padding: 37px 25px;
      text-align: left;
      box-sizing: border-box;
      margin-bottom: 10px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 25px;

      > div:first-of-type {
        width: 30%;
        height: 100%;
        margin-bottom: 0;
        display: inline-block;

        > img {
          max-height: 71px;
          max-width: 96px;
        }
      }
      > div:last-of-type {
        width: 70%;
        text-align: left;
        > h4 {
          margin-bottom: 6px;
          font-size: 0.875rem;
        }
        > p {
          font-size: .625rem;
          margin-bottom: 0;
        }
      }
    }
  }
`

export const OtherAppWrapper = styled.section`
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
  @media (max-width: 999px) {
    margin-bottom: 30px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto repeat(2, 1fr);
    justify-content: center;
    gap: 0 15px;
    
    > h3 {
      margin-top: 50px;
      grid-column: span 2;
      font-size: 1.05rem;
      line-height: 1.4;
      font-weight: 600;
      margin-bottom: 35px;
    }

    > div {
      margin-bottom: 30px;
      > img {
        max-width: 154px;
        max-height: 154px;
      }
      > p {
        margin: 5px 0 5px;
        font-size: .875rem;
      }
      > a {
        min-width: 120px;
        min-height: 30px;
        font-size: .625rem;
        line-height: 30px;
      }
    }
    > div:nth-child(3), > div:nth-child(4) {
      grid-row: 3;
    }
  }
`
// delivery --------------------------------- end

// catering ---------------------------------
export const CateringWrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 50px auto 0;

  @media (max-width: 999px) {
    margin: 30px auto 0;
  }
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

  @media (max-width: 999px) {
    flex-direction: column;
    min-height: 418px;
    margin-bottom: 7px;

    > div:first-of-type {
      width: 50%;
      min-height: 168px;
      height: 100%;
      background-size: contain;
      margin: 30px auto 0;

      &.bg_bottom {
        background-position: center bottom;
      }
    }

    > div:nth-of-type(n+2) {
      width: calc(100% - 60px);
      padding: 0 30px;

      > p.small {
        margin-top: 10px;
        margin-bottom: 7px;
        font-size: .6875rem;
      }
      > h4 {
        font-size: 1.1rem;
        
        &.font__deep {
          font-size: 1.31rem;
        }
      }

      > div {
        margin-top: 16px;

        > div {
          > p {
            font-size: .6875rem;
            line-height: 1.3;
            font-weight: 500;

            &.round_title {
              width: 68px;
              height: 21px;
              margin-bottom: 10px;
              line-height: 21px;
            }
          }
        }
      }
    }
  }
`
// catering --------------------------------- end