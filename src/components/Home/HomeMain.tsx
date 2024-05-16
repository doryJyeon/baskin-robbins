import { BgDot } from "../../styles/GlobalStyle";
import { EventWrapper, HomeImageWrapper, HomeWrapper, Event } from "./styleHomeMain";

const HomeMain = () => (
  <BgDot>
    <HomeWrapper>
      <img className="hero-title" src="/images/main/home_hero_frame_title.png" alt="home hero title" />
      <HomeImageWrapper>
        <img src="/images/main/home_hero.png" alt="home hero" />
        <EventWrapper>
          <Event to="/1" className="event-box1">
            <img src="/images/icons/cup_icecreams.png" alt="icecreams" />
            <p className="small">주문하기</p>
            <p>픽업 & 배달 주문하기!</p>
          </Event>

          <Event to="/2">
            <img src="/images/icons/icecream_scoop.png" alt="icecreams" />
            <p className="small">나만의 아이스크림 만들기</p>
            <p>좋아하는 재료로 <br />원하는 아이스크림을!</p>
          </Event>

          <Event to="/3">
            <img src="/images/icons/icecream_sign.png" alt="icecream_sign" />
            <p className="small">매장 찾기</p>
            <p>가까운 매장을 찾아보세요!</p>
          </Event>
        </EventWrapper>
      </HomeImageWrapper>
    </HomeWrapper>
  </BgDot>
)

export default HomeMain;
