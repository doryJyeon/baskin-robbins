import { styled } from "styled-components"
import { Container } from "../../styles/GlobalStyle"

// web =========================================
export const FooterWrapper = styled(Container)`
  padding: 30px 0 50px;
  color: #fff;

  // 포폴 사이트 안내
  > p:last-of-type {
    font-size: 0.7rem;
    color: #ffffff50;
    text-align: center;
    line-height: 2.5;
  }

@media (max-width: 999px) {
  display: none;
}
`
// -- company move menu
export const CompanyLink = styled.div`
  font-size: .8rem;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #fff3;

  @media (max-width: 1380px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    > a {
      line-height: 2;
    }
  }
`

// -- logo & footer menu
export const LogoMenu = styled.div`
  display: flex;
  border-bottom: 1px solid #fff3;
  padding: 30px 0;
  
  @media (max-width: 999px) {
    border-bottom: none;
    padding: 27px 0 0;
  }
`

export const LogoWrapper = styled.div`
  > img {
    height: 91px;
    margin-bottom: 15px;
  }

  > *:not(img){
    font-size: .7rem;
    font-style: normal;
    color: #fff4;
    line-height: 2.3;
    font-weight: 400;
  }
  
  > p:last-of-type {
    color: #fff8;
    letter-spacing: .5px;
    margin-top: 20px;
  }

  @media (max-width: 999px) {
    > img.mobile__logo {
      width: 179px;
      height: 38px;
      margin-bottom: 15px;
    }
    > *:not(img){
      color: #ffffff3b;
      font-size: .625rem;
      line-height: 2.3;
      font-weight: 400;
    }
    > p:last-of-type {
      color: #ffffff3b;
      letter-spacing: 0;
      margin-top: 0;
    }
  }
`

export const MenuWrapper = styled.div`
  margin-left: auto;

  > ul {
    display: flex;
    gap: 50px;
    color: #fff3;
    font-size: 1.4rem;
    font-weight: 600;
    
    > li {
      > ol {
        margin-top: 25px;
        color: #fff;
        font-size: .95rem;

        > li {
          margin-bottom: 10px;
          font-weight: 400;
        }
      }
    }
    
  }
  
  @media (max-width: 1100px) {
    > ul {
      gap: 30px;
    }
  }
`

// -- bottom logo & sns
export const SnsWrapper = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 30px;
  
  @media (max-width: 999px) {
    padding: 42px 0 18px;
    flex-direction: column;
    border-bottom: 1px solid #333230;
  }
`

export const HappyLogos = styled.div`
  > a {
    margin-right: 40px;
  }
  
  @media (max-width: 999px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 0 0;
    text-align: center;

    > a {
      margin: 0;

      > img {
        height: 23px;
      }
    }
  }
`

export const SnsLogos = styled.div`
  margin-left: auto;
  
  > a {
    margin-right: 50px;
  }
  
  @media (max-width: 999px) {
    width: 100%;
    height: 40px;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    > a {
      margin-right: 0;

      > img {
        height: 18px;
      }
    }
  }
`
// web ========================================= end
// mobile only ======================================
export const MobileFooterWrapper = styled(Container)`
  @media (min-width: 1000px) {
    display: none;
  }
  color: #ffffff3b;
  padding-bottom: 61px;

  // 포폴 사이트 안내 & copyright
  > p {
    margin-top: 19px;
    font-size: 0.625rem;
    line-height: 1;
  }

`
export const CompanyLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  text-align: center;
  gap: 0;

  > a {
    width: auto;
    flex-grow: 1;
    border: 1px solid #ffffff3b;
    border-top: none;
    padding: 12px 0;
    font-size: 0.625rem;
    color: #fff;
    white-space: nowrap;
  }
`

export const CompanyLinks4Item = styled(CompanyLinks)`
  > a {
    border-top: 1px solid #ffffff3b;
  }
`

// mobile ========================================= end
