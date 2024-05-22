import { BgDot } from "../../styles/GlobalStyle";
import MoveImg from "../common/MoveImg";
import { EventWrapper, HomeImageWrapper, HomeWrapper } from "./styleHomeMain";

const HomeMain = () => (
  <BgDot>
    <HomeWrapper>
      <img className="hero-title" src="/images/main/home_hero_frame_title.png" alt="home hero title" />
      <HomeImageWrapper>
        <img src="/images/main/home_hero.png" alt="home hero" />
        <EventWrapper>
          <MoveImg to={"event/"} src={"main/home_event1.png"} alt="event" />
          <MoveImg to={"event/"} src={"main/home_event2.png"} alt="event" />
          <MoveImg to={"event/"} src={"main/home_event3.png"} alt="event" />
        </EventWrapper>
      </HomeImageWrapper>
    </HomeWrapper>
  </BgDot>
)

export default HomeMain;
