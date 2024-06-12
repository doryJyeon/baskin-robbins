import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InnerContainer } from "../styles/GlobalStyle";
import TitleDesc from "../components/common/TitleDesc";
import PlayLinks from "../components/Play/PlayLinks";
import { EventDetailWrapper } from "../components/Play/styled";
import { Event, EventDetailProps } from "../interfaces/events";
import { fetchData } from "../api/fetchData";
import DataStateComponent from "../components/common/DataStateComponent";
import MoveButton from "../components/common/MoveButton";

const EventPage = () => {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<EventDetailProps | null>(null);
  const [dataState, setDataState] = useState("Loading");

  // get all events
  const getData = async () => {
    try {
      setDataState("Loading");
      setData(null);

      const result = await fetchData<Event>("/data/Events.json");
      if (result) {
        setData(result[id as keyof Event]);
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
    getData();
  }, []);

  return (
    <InnerContainer top="160px">
      <PlayLinks menuCheck={"event"} />

      <TitleDesc title={"Event"} />

      {dataState !== "" && <DataStateComponent getState={dataState} />}
      {data && (
        <EventDetailWrapper>
          <hr className="only__mobile" />
          <p>{data.type}</p>
          <h2>{data.title}</h2>
          <p className="event__date">{data.start && data.start + " ~ "}{data.end}</p>
          <hr className="only__pc" />

          <img src={`/images/event/${data.type}/detail/${data.detail_img}`} alt={`${data.type}`} />
          <hr />
          <MoveButton text={"목록"} to={"/play/event/all"} className="large dark" />
        </EventDetailWrapper>
      )}
    </InnerContainer>
  );
}

export default EventPage;
