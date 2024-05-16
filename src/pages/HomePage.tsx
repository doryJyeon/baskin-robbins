import HomeMain from "../components/Home/HomeMain"
import NewItem from "../components/Home/NewItem"
import HomePromotion from "../components/Home/HomePromotion"
import BeBetter from "../components/Home/BeBetter"
import Benefit from "../components/Home/Benefit"
import BRPlay from "../components/Home/BRPlay"

const HomePage = () => {
  return (
    <>
      <HomeMain />
      <HomePromotion />
      <NewItem />
      <BRPlay />
      <BeBetter />
      <Benefit />
    </>
  )
}

export default HomePage
