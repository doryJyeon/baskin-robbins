import PlayLinks from "../components/Play/PlayLinks";
import PlazaDetails from "../components/Play/PlazaDetails";
import TitleDesc from "../components/common/TitleDesc";
import { InnerContainer } from "../styles/GlobalStyle";


const PlazaPage = () => {
  return (
    <InnerContainer top="160px">
      <PlayLinks menuCheck={"plaza"} />

      <TitleDesc title={"배라광장"} desc={"배라에게 묻고 배라가 답해드려요,<br />배라에게 다양한 의견을 전달해주세요"} />

      <PlazaDetails />
    </InnerContainer>
  );
}

export default PlazaPage;
