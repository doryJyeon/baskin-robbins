import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { InnerContainer, TypeWrapper } from "../styles/GlobalStyle";
import TitleDesc from "../components/common/TitleDesc";
import PlayLinks from "../components/Play/PlayLinks";
import { EventWrapper } from "../components/Play/styled";
import { Event } from "../interfaces/events";
import MoveLink from "../components/common/MoveLink";
import { checkActive } from "../utils/utilityFunctions";
import EventDetail from "../components/Play/EventDetail";
import { dateExpiredCheck } from "../utils/dateUtils";
import { fetchData } from "../api/fetchData";
import DataStateComponent from "../components/common/DataStateComponent";

const EventPage = () => {
  const { type = "all" } = useParams<{ type: string }>();
  const navigate = useNavigate();

  const [data, setData] = useState<Event | null>(null);
  const [dataState, setDataState] = useState("Loading");

  // get all events
  const getData = async () => {
    try {
      setDataState("Loading");
      setData(null);

      const result = await fetchData<Event>("/data/Events.json");
      if (result) {
        setData(result);
        setDataState("");
      } else {
        setDataState("No Data");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setDataState("Error");
    }
  };

  useEffect(() => {
    // type 이상하면 기본 all로 이동
    if (type !== "all" && type !== "promotion" && type !== "benefit") {
      navigate('/play/event/all');
    }
    getData();
  }, [type, navigate]);

  return (
    <InnerContainer top="160px">
      <PlayLinks menuCheck={"event"} />

      <TitleDesc title={"Event"} desc={"배스킨라빈스와 함께 해피포인트앱/오프라인 매장에서 진행하는 <br/>다양한 이벤트를 확인해보세요"} />

      <TypeWrapper>
        <MoveLink text={"전체"} to={"play/event/all"} isLi={true} isActive={checkActive(type, "all")} />
        <MoveLink text={"프로모션"} to={"play/event/promotion"} isLi={true} isActive={checkActive(type, "promotion")} />
        <MoveLink text={"제휴혜택"} to={"play/event/benefit"} isLi={true} isActive={checkActive(type, "benefit")} />
      </TypeWrapper>

      {dataState !== "" && <DataStateComponent getState={dataState} />}
      {data && (
        <EventWrapper>
          {Object.entries(data).map(([key, item]) => (
            // 유효기간 체크
            !dateExpiredCheck(item.end) && (
              type === "all" ? (
                <EventDetail id={key} data={item} />
              ) : type === item.type && (
                <EventDetail id={key} data={item} />
              )
            )
          ))}
        </EventWrapper>
      )}
    </InnerContainer>
  );
}

export default EventPage;
