import { styled } from "styled-components"
import { Container } from "../../styles/GlobalStyle"

export const FooterWrapper = styled(Container)`
  padding: 30px 0 50px;
  color: #fff;

  // 포폴 사이트 안내, 아이콘 저작권 표시
  > p:last-of-type {
    font-size: 0.7rem;
    color: #ffffff50;
    text-align: center;
    line-height: 2.5;
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
`

export const HappyLogos = styled.div`
  > a {
    margin-right: 40px;
  }
`

export const SnsLogos = styled.div`
  margin-left: auto;
  
  > a {
    margin-right: 50px;
  }
`
