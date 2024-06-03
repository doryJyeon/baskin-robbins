import { useEffect, useState } from "react"
import HomeMain from "../components/Home/HomeMain"
import NewItem from "../components/Home/NewItem"
import HomePromotion from "../components/Home/HomePromotion"
import BeBetter from "../components/Home/BeBetter"
import Benefit from "../components/Home/Benefit"
import BRPlay from "../components/Home/BRPlay"
import { Event } from "../interfaces/events";
import { dateExpiredCheck } from "../utils/dateUtils"
import { fetchData } from "../api/fetchData"

const HomePage = () => {
  const [dataPromotion, setDataPromotion] = useState<Event | null>(null);
  const [dataBenefit, setDataBenefit] = useState<Event | null>(null);
  const [dataState, setDataState] = useState("Loading");

  // get all events
  const getData = async () => {
    try {
      setDataState("Loading");
      setDataPromotion(null);
      setDataBenefit(null);

      const result = await fetchData<Event>("/data/Events.json");

      if (result) {
        const validData = Object.entries(result)
          .reduce((acc, [key, item]) => {
            if (!dateExpiredCheck(item.end)) {
              if (item.type === "promotion") {
                acc.promotionData[key] = item;
              } else if (item.type === "benefit") {
                acc.benefitData[key] = item;
              }
            }
            return acc;
          }, { promotionData: {} as Event, benefitData: {} as Event });

        setDataPromotion(validData.promotionData);
        setDataBenefit(validData.benefitData);
        setDataState("");
      } else {
        setDataState("No Data");
      }
    } catch (error) {
      console.error('Error fetching TotalMenus data:', error);
      setDataState("Error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HomeMain />
      {dataState === "" && dataPromotion && <HomePromotion eventData={dataPromotion} />}
      <NewItem />
      <BRPlay />
      <BeBetter />
      {dataState === "" && dataBenefit && <Benefit eventData={dataBenefit} />}
    </>
  )
}

export default HomePage
