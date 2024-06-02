import { useParams } from "react-router-dom";
import { InnerContainer } from "../styles/GlobalStyle";
import StoreLinks from "../components/Store/StoreLinks";
import Delivery from "../components/Store/Delivery";
import Catering from "../components/Store/Catering";


const StorePage = () => {
  const { type = "delivery" } = useParams();

  return (
    <InnerContainer top="160px">
      <StoreLinks menuCheck={type} />

      {type === "delivery" ? <Delivery /> : <Catering />}
    </InnerContainer>
  );
}

export default StorePage;
