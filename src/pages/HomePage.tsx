import HomeMain from "../components/Home/HomeMain"
import OrderFlavor from "../components/Home/OrderFlavor"
import Promotion from "../components/Home/Promotion"
import BeBetter from "../components/Home/BeBetter"
import Benefit from "../components/Home/Benefit"
import Store from "../components/Home/Store"

const HomePage = () => {
  return (
    <>
      {/* <HomeMain /> */}
      <Promotion />
      <OrderFlavor/>
      <BeBetter />
      <Benefit />
      <Store/>
    </>
  )
}

export default HomePage
