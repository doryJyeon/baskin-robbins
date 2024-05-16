import { styled } from "styled-components";
import { InnerContainer, colors } from "../../styles/GlobalStyle";
import MoveImg from "../common/MoveImg";
import SectionTitle from "../common/SectionTitle";
import { PromotionsData } from "../../data/PromotionsData";
import Slider from "react-slick";

const HomePromotion = () => {
  const sliderSettings = {
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
  };

  return (
    <InnerContainer>
      <SectionTitle title="Promotion" subTitle="배라의 다양한 혜택과 이벤트를 만나보세요" />

      <div className="slider-container">
        <Slider {...sliderSettings}>
          {PromotionsData.map((item: string, index: number) => (
            <Promotion key={index}>
              <MoveImg to={"promotion/a"} src={`promotion/${item[0]}`} />
              <PromoDay>{item[1]}</PromoDay>
              <PromoDescription>{item[2]}</PromoDescription>
            </Promotion>
          ))}
        </Slider>
      </div>

    </InnerContainer>
  );
}

export default HomePromotion;

// const PromotionWrapper = styled(InnerContainer)`
// `

const Promotion = styled.div`
  margin-bottom: 100px;
  box-sizing: border-box;
  padding-right: 8%;

  > a > img {
    width: auto;
    max-height: 258.5px;
    height: 17.26vw;
    border-radius: 300px 300px 0 0;
  }
`

const PromoDay = styled.p`
  color: ${colors.sand};
  font-size: .7rem;
  letter-spacing: .8px;
  border-bottom: 2px solid ${colors.sand};
  margin: 15px 0;
  padding-bottom: 15px;
`

const PromoDescription = styled.p`
  font-size: .9rem;
  color: ${colors.font};
`

