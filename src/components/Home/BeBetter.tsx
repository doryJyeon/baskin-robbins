import { styled } from 'styled-components';
import { BgBeige, MainInnerContainer, betterColor, colors } from '../../styles/GlobalStyle';
import SectionTitle from '../common/SectionTitle';
import useMobileStore from '../../store/useMobileStore';
import Slider from 'react-slick';

const BeBetter = () => {
  const { isMobile, sizeW } = useMobileStore();


  // [0]: mobile, [1]: tablet
  const sliderSettings = [{
    dots: false,
    nextArrow: <></>,
    prevArrow: <></>,
    infinite: true,
    autoplay: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '27px',
  }, {
    dots: false,
    nextArrow: <></>,
    prevArrow: <></>,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true
  }];

  return (
    <BgBeige>
      <MainInnerContainer top="120px" style={{ textAlign: "center" }}>
        <SectionTitle title={"Be Better"} subTitle="배라가 사회와 함께 하는 방법, 가치 있는 같이" />

        {isMobile ? (
          <BetterWrapper className="slider-container slider__custom__margin">
            <Slider {...sliderSettings[(sizeW < 580 ? 0 : 1)]}>
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
            </Slider>
          </BetterWrapper>
        ) : (
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
        )}
      </MainInnerContainer>
    </BgBeige >
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
      }

      > p {
        font-size: 1rem;
        color: ${colors.dark};
      }
    }
  }

  .brown {
    color: ${betterColor.brown};
  }
  .pink {
    color: ${betterColor.pink};
  }
  .green {
    color: ${betterColor.green};
  }

  @media (max-width: 999px) {
    width: 100vw;
    margin: 0 auto 0;
    display: inline-block;
    text-align: center;

    a {
      width: 33.3%;
      max-width: auto;
      height: fit-content;
      background-color: #fff;
      border-radius: 15px;
      display: inline-block;
      margin-right: 27px;
      text-align: center;

      > img {
        width: 100%;
        border-radius: 15px;
      }

      > div {
        padding: 10px 20px 20px;

        > h4 {
          font-size: 1.3rem;
        }

        > p {
          font-size: 0.875rem;
          height: 50px;
        }
      }
    }
    a:first-of-type {
      margin-left: 27px;
    }
  }
  @media (max-width: 580px) {
    a:first-of-type {
      margin-left: 0;
    }
  }
`
