import { styled } from "styled-components";
import { BgLightPink, InnerContainer } from "../../styles/GlobalStyle";
import SectionTitle from "../common/SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";
import { NewItemData } from "../../data/NewItemData";
import Slider from "react-slick";

interface BgImgUrl {
  bgImg: string;
}

const NewItem = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <BgLightPink>
      <InnerContainer>
        <SectionTitle title="New Item" subTitle="새로 나온 배라의 신제품을 소개합니다" />

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {NewItemData.map((items) => (
              <NewItems>
                <MainItem bgImg={`/images/new_item/${items[0][0]}`} />

                <SubItems>
                  <SubItem>
                    <img src={`/images/new_item/${items[1][0]}`} alt={`${items[1][1]}`} />
                    <ItemTitle color={`${items[1][2]}`}>{`${items[1][1]}`}</ItemTitle>
                    <ItemArrow color={`${items[1][2]}`} >
                      <FaArrowRightLong />
                    </ItemArrow>
                  </SubItem>
                  <SubItem>
                    <img src={`/images/new_item/${items[2][0]}`} alt={`${items[2][1]}`} />
                    <ItemTitle color={`${items[2][2]}`}>{`${items[2][1]}`}</ItemTitle>
                    <ItemArrow color={`${items[2][2]}`} >
                      <FaArrowRightLong />
                    </ItemArrow>
                  </SubItem>
                </SubItems>

                <SubItems>
                  <SubItem>
                    <img src={`/images/new_item/${items[3][0]}`} alt={`${items[3][1]}`} />
                    <ItemTitle color={`${items[3][2]}`}>{`${items[3][1]}`}</ItemTitle>
                    <ItemArrow color={`${items[3][2]}`} >
                      <FaArrowRightLong />
                    </ItemArrow>
                  </SubItem>
                  <SubItem>
                    <img src={`/images/new_item/${items[4][0]}`} alt={`${items[4][1]}`} />
                    <ItemTitle color={`${items[4][2]}`}>{`${items[4][1]}`}</ItemTitle>
                    <ItemArrow color={`${items[4][2]}`} >
                      <FaArrowRightLong />
                    </ItemArrow>
                  </SubItem>

                </SubItems>
              </NewItems>
            ))}
          </Slider>
        </div>
      </InnerContainer>
    </BgLightPink>
  );
}

export default NewItem;

const NewItems = styled.div`
  margin: 0 auto 30px;
  max-width: 1168px;
  display: flex !important;
  justify-content: space-between;
  gap: 8px;
`
const MainItem = styled.div<BgImgUrl>`
  width: 30.48%;
  height: 43.75vw;
  max-height: 511px;
  border-radius: 15px;
  background-color: pink;
  background-image: url(${props => props.bgImg});
  background-position: center;
  background-size: cover;
`
const SubItems = styled.div`
  width: 34.24%;
`

const SubItem = styled.div`
  width: 100%;
  height: 21.66vw;
  max-height: 253px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  position: relative;

  &:first-of-type {
    margin-bottom: 8px;
  }

  > img {
    width: 50%;
    height: 100%;
    border-radius: 15px;
  }
`

const ItemTitle = styled.span`
  font-size: 1rem;
  padding: 30px 20px 0;
  display: inline-block;
  color: ${props => props.color};
`

const ItemArrow = styled.div`
  position: absolute;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  bottom: 30px;
  right: 20px;
  font-size: 1.8rem;
  text-align: center;
  line-height: 50px;
  color: #fff;
`