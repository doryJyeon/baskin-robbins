import { styled } from "styled-components";
import { InnerContainer } from "../../styles/GlobalStyle";
import SectionTitle from "../common/SectionTitle";
import MoveImg from "../common/MoveImg";

const BRPlay = () => {
  return (
    <BgBrown>
      <InnerContainer>
        <SectionTitle title={"BR Play"} color="#37110e" subTitle="배라와 함께한 당신의 다양한 의견을 듣습니다" />

        <PlayWrapper>
          <MoveImg to={"my_flavor_list"} src={"main/my_flavor_list.png"} alt="My flavor list" />
          <MoveImg to={"br_plaza"} src={"main/br_plaza.png"} alt="배라광장" />
        </PlayWrapper>
      </InnerContainer>
    </BgBrown>
  );
}

export default BRPlay;

const BgBrown = styled.div`
  background-image: url("/images/main/bg_play.jpg");
  background-size: auto;
  background-repeat: repeat;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 40px;
    max-width: 1689px;
    width: 100%;
    height: 100%;
    background-image: url("/images/main/bg_play_light.png");
    background-size: cover;
    z-index: 0;
  }

  > div {
    position: relative;
    z-index: 1;
  }
`

const PlayWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -30px auto 50px;
  gap: 20px;
  filter: drop-shadow(0px 20px 20px rgba(81, 30, 1, .2)) drop-shadow(0px 1px 2.85px rgba(81, 30, 1, .8));
  
  > a {
    transition: all .3s;
    cursor: pointer;
  }

  > a:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  img {
    width: 360px;
  }
`