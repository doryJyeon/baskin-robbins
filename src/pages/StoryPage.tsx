import { useParams } from "react-router-dom";
import { InnerContainer } from "../styles/GlobalStyle";
import StoryLinks from "../components/Story/StoryLinks";
import History from "../components/Story/History";
import BeBetter from "../components/Story/BeBetter";


const StoryPage = () => {
  const { type = "history" } = useParams();

  return (
    <InnerContainer top="160px">
      <StoryLinks menuCheck={type} />

      {type === "history" ? <History /> : <BeBetter />}
    </InnerContainer>
  );
}

export default StoryPage;
