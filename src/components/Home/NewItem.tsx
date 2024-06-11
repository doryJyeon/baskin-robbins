import { styled } from "styled-components";
import { BgLightPink, MainInnerContainer } from "../../styles/GlobalStyle";
import SectionTitle from "../common/SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";
import { NewItemData } from "../../data/NewItemData";
import Slider from "react-slick";
import useMobileStore from "../../store/useMobileStore";

interface BgImgUrl {
  bgImg: string;
}

const NewItem = () => {
  const { isMobile, sizeW } = useMobileStore();
  const slideItems = sizeW < 580 ? 1.5 : (sizeW < 870 ? 2.5 : 3.5);

  // [0]: pc, [1]: mobile
  const sliderSettings = [
    {
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
    }, {
      dots: false,
      nextArrow: <></>,
      prevArrow: <></>,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: slideItems,
      slidesToScroll: 1,
      swipeToSlide: true,
    }
  ];

  // pc에서는 이미지 안에 이름 포함된 이미지 사용
  const getPcFirstItemName = (name: string) => name.replace(".jpg", "_main.jpg")

  return (
    <BgLightPink>
      <MainInnerContainer>
        <SectionTitle title="New Item" subTitle="새로 나온 배라의 신제품을 소개합니다" />

        <div className="slider-container">
          {isMobile ? (
            <MobileNewItems>
              <Slider {...sliderSettings[1]}>
                {NewItemData.map((items) => (
                  items.map((item) => (
                    <MobileNewItem>
                      <div>
                        <img src={`/images/new_item/${item[0]}`} alt={`${item[1]}`} />
                        <p style={{ color: item[2] }}>{item[1]}</p>
                      </div>
                    </MobileNewItem>
                  ))
                ))}
              </Slider>
            </MobileNewItems>
          ) : (
            <Slider {...sliderSettings[0]}>
              {NewItemData.map((items, index) => (
                <NewItems key={`NewI${index}`}>
                  <MainItem bgImg={`/images/new_item/${getPcFirstItemName(items[0][0])}`} />

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
          )}
        </div>
      </MainInnerContainer>
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

const MobileNewItems = styled.div`
  width: 100vw;
  white-space: nowrap;
`

const MobileNewItem = styled.div`
  width: fit-content;
  display: inline-block;
  
  > div {
    margin-left: 27px;
    border-radius: 15px;
    background-color: #fff;
    > img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 15px;
    }

    > p {
      width: 100%;
      height: 88px;
      padding: 20px;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 15px;
    }
  }
`