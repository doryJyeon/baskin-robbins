import { styled } from "styled-components";
import { MainInnerContainer, colors } from "../../styles/GlobalStyle";
import MoveImg from "../common/MoveImg";
import SectionTitle from "../common/SectionTitle";
import Slider from "react-slick";
import { Event } from "../../interfaces/events";
import useMobileStore from "../../store/useMobileStore";

interface Props {
  eventData: Event;
}

const Benefit: React.FC<Props> = ({ eventData }) => {
  const { isMobile, sizeW } = useMobileStore();
  const slideItems = sizeW < 580 ? 1.5 : (sizeW < 870 ? 3.5 : 5);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: slideItems,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "ease"
  };

  return (
    <MainInnerContainer>
      <SectionTitle title={"BR Benefit"} subTitle="배라와 함께 다양한 혜택을 즐기세요" />

      <div className="slider-container">
        <Benefits>
          <Slider {...sliderSettings}>
            {Object.entries(eventData).map(([key, item]) => (
              <MoveImg key={key} to={`play/event/benefit/${key}`} src={`event/${item.img}`} alt={"benefit"} />
            ))}
          </Slider>
        </Benefits>
      </div>

      <LoadMapWrapper>
        <div>
          <TitleDesc>
            <h3>Store</h3>
            <span>내 주변 가까운<br />배스킨라빈스 매장을 찾아보세요</span>
          </TitleDesc>
          {isMobile
            ? <MoveImg mobileImg={true} to={"https://www.baskinrobbins.co.kr/store/map.php"} src={"icons/img_store_map.png"} blank={true} />
            : <MoveImg to={"https://www.baskinrobbins.co.kr/store/map.php"} src={"icons/img_store_map.png"} blank={true} />
          }
        </div>

        <div>
          <TitleDesc>
            <h3>BR Way</h3>
            <span>오랜 시간 우리 곁에 함께한<br />배스킨라빈스의 이야기</span>
          </TitleDesc>
          {isMobile
            ? <MoveImg mobileImg={true} to={"story/history"} src={"icons/img_story_story.png"} />
            : <MoveImg to={"story/history"} src={"icons/img_story_story.png"} />
          }
        </div>
      </LoadMapWrapper>
    </MainInnerContainer>
  );
}

export default Benefit;

const Benefits = styled.div`
  width: 100%;
  margin-bottom: 100px;

  img {
    width: calc(100% - 30px);
    max-width: 295px;
    border-radius: 10px;
  }
`
const LoadMapWrapper = styled.div`
  display: flex;

  > div {
    width: 100%;
    padding-left: 80px;
    box-sizing: border-box;
    position: relative;

    > a:hover {
      opacity: 1;
    }
  }

  img {
    position: relative;
    transition: all .3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  > div:first-child img {
    width: calc(100% + 80px);
    left: -80px;
  }

  > div:last-child img {
    width: 100%;
    top: -6vw;
  }

  @media (max-width: 980px) {
    width: 100%;
    display: block;
    text-align: center;

    > div {
      max-width: 400px;
      padding-left: 0;
      margin: 0 auto;

      > a:hover {
        opacity: 1;
      }
    }

    > div:first-child img {
      width: 100%;
      left: 0;
      margin-bottom: 50px;
    }

    > div:last-child img {
      top: 0;
    }
  }
`
const TitleDesc = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  margin-bottom: 20px;
  z-index: 3;

  > h3 {
    font-size: 2.8rem;
    color: ${colors.deep};
  }

  > span {
    font-size: .9rem;
    line-height: 1.1;
    padding-bottom: .7rem;
    color: ${colors.font}
  }
  
  @media (max-width: 980px) {
    display: block;
    margin-bottom: 0;
    text-align: center;

    > h3 {
      font-size: 1.875rem;
    }

    > span {
      font-size: .95rem;
      padding-bottom: 0;
    }
  }
`