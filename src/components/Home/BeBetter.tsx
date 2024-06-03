import { styled } from 'styled-components';
import { BgBeige, InnerContainer, betterColor, colors } from '../../styles/GlobalStyle';
import SectionTitle from '../common/SectionTitle';

const BeBetter = () => {
  return (
    <BgBeige>
      <InnerContainer top="120px">
        <SectionTitle title={"Be Better"} subTitle="배라가 사회와 함께 하는 방법, 가치 있는 같이" />

        <BetterWrapper>
          <a href="/be_better/farm">
            <img src="/images/be_better/img_farm.png" alt="핑크팜" />
            <div>
              <h4 className="brown">핑크팜 캠페인</h4>
              <p>지역 농가 상생 프로젝트</p>
            </div>
          </a>
          <a href="/be_better/dream">
            <img src="/images/be_better/img_dream.png" alt="핑크드림" />
            <div>
              <h4 className="pink">핑크드림 캠페인</h4>
              <p>청소년 자립 지원 프로젝트</p>
            </div>
          </a>
          <a href="/be_better/link">
            <img src="/images/be_better/img_link.png" alt="핑크링크" />
            <div>
              <h4 className="green">핑크링크 캠페인</h4>
              <p>중소 기업 콜라보 프로젝트</p>
            </div>
          </a>
        </BetterWrapper>
      </InnerContainer>
    </BgBeige>
  );
}

export default BeBetter;

const BetterWrapper = styled.div`
  width: 100%;
  max-width: 1112px;
  margin: 0 auto 50px;
  display: grid;
  grid: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 10px;
  justify-content: space-between;

  > a {
    width: 100%;
    max-width: 546px;
    height: fit-content;
    background-color: #fff;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 50% auto;

    > img {
      width: 100%;
      max-width: 322px;
      height: auto;
      border-radius: 10px;
    }

    > div {
      padding: 36px 20px;

      > h4 {
        font-size: 1.5rem;
        font-weight: 600;

        &.brown {
          color: ${betterColor.brown};
        }
        &.pink {
          color: ${betterColor.pink};
        }
        &.green {
          color: ${betterColor.green};
        }
      }

      > p {
        font-size: 1rem;
        color: ${colors.dark};
      }
    }
  }
`
