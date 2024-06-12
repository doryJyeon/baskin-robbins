import { BgDot } from "../../styles/GlobalStyle";
import MoveImg from "../common/MoveImg";
import { EventWrapper, HomeImageWrapper, HomeWrapper, MobileHomeImg } from "./styleHomeMain";

const HomeMain = () => (
  <BgDot>
    <HomeWrapper>
      <img className="hero-title" src="/images/main/home_hero_frame_title.png" alt="home hero title" />
      <HomeImageWrapper>
        <img src="/images/main/home_hero.png" alt="home hero" />
        <EventWrapper>
          <MoveImg to={"play/event/promotion/"} src={"main/home_event1.png"} alt="event" />
          <MoveImg to={"play/event/promotion/109"} src={"main/home_event2.png"} alt="event" />
          <MoveImg to={"play/event/promotion/103"} src={"main/home_event3.png"} alt="event" />
        </EventWrapper>
      </HomeImageWrapper>
    </HomeWrapper>
    <MobileHomeImg>
      <div>
        <img className="hero__frame" src="/m_images/main/bg_hero_frame.png" alt="frame" />
        <img className="hero__content" src="/m_images/main/home_hero.png" alt="home hero" />
      </div>
    </MobileHomeImg>
  </BgDot>
)

export default HomeMain;
