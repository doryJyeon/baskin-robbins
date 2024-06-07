import { styled } from "styled-components";
import { BgDotMobileOnly, MainInnerContainer, colors } from "../../styles/GlobalStyle";
import MoveImg from "../common/MoveImg";
import SectionTitle from "../common/SectionTitle";
import Slider from "react-slick";
import { Event } from "../../interfaces/events";
import useStore from "../../store";
interface Props {
  eventData: Event;
}

const HomePromotion: React.FC<Props> = ({ eventData }) => {
  const { isMobile, sizeW } = useStore((state) => state);
  const slideItems = sizeW < 580 ? 1.5 : (sizeW < 780 ? 2.3 : 3.5);

  // [0]: pc, [1]: mobile
  const sliderSettings = [
    {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <></>,
      prevArrow: <></>,
      customPaging: () => (
        <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "8px",
            backgroundColor: "#f3ccd5",
            border: "none",
            marginRight: "20px"
          }}
        ></div >
      )
    }, {
      dots: false,
      nextArrow: <></>,
      prevArrow: <></>,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: slideItems,
      slidesToScroll: 1,
      swipeToSlide: true
    }
  ];

  return (
    <BgDotMobileOnly>
      <MainInnerContainer>
        <SectionTitle title="Promotion" subTitle="배라의 다양한 혜택과 이벤트를 만나보세요" />

        <div className="slider-container">
          <Slider {...(isMobile ? sliderSettings[1] : sliderSettings[0])}>
            {Object.entries(eventData).map(([key, item]) => (
              <Promotion key={key}>
                <div>
                  <MoveImg to={`event/promotion`} src={`event/${item.img}`} />
                  <PromoDay>{item.start && `${item.start} ~ `}{item.end}</PromoDay>
                  <PromoDescription>{item.title}</PromoDescription>
                </div>
              </Promotion>
            ))}
          </Slider>
        </div>
      </MainInnerContainer>
    </BgDotMobileOnly>
  );
}

export default HomePromotion;

const Promotion = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  box-sizing: border-box;
  padding-right: 8%;

  > div {
    max-width: 258.5px;

    > a > img {
      width: auto;
      max-height: 258.5px;
      height: 17.26vw;
      border-radius: 50% 50% 0 0;
    }
  }

  @media (max-width: 999px) {
    margin-top: 0;
    margin-bottom: 60px;
    padding-right: 0;
    margin-right: 27px;

    > div {
      background-color: #fff;
      margin-right: 27px;
      border-radius: 50% 50% 0 0;

      > a > img {
        width: 100%;
        max-height: auto;
        height: auto;
      }
    }
    &:first-child {
      margin-left: 3vw;
    }
  }
`

const PromoDay = styled.p`
  color: ${colors.sand};
  font-size: .7rem;
  letter-spacing: .8px;
  border-bottom: 2px solid ${colors.sand};
  margin: 15px 0;
  padding-bottom: 15px;

  @media (max-width: 999px) {
    font-size: .875rem;
    letter-spacing: 0;
    margin: 17px 3% 14px;
    padding-bottom: 14px;
  }
`

const PromoDescription = styled.p`
  font-size: .9rem;
  color: ${colors.font};
  
  @media (max-width: 999px) {
    font-size: .875rem;
    height: 70px;
    padding: 0 3% 0;
  }
`

