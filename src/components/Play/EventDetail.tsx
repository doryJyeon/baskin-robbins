import { EventLink } from "./styled";
import { EventDetailProps } from "../../interfaces/events";
import { remainingDate } from "../../utils/dateUtils";

interface Props {
  id: string;
  data: EventDetailProps;
}

const EventDetail: React.FC<Props> = ({ id, data }) => {
  return (
    <EventLink to={`/play/event/${data.type}/${id}`} isBenefit={data.type === "benefit"} key={id}>
      <div>
        {data.end.indexOf("-") > 0 && <p>D-{remainingDate(data.end)}</p>}
        <img src={`/images/event/${data.img}`} alt={data.type} />
      </div>

      <div>
        <p className={data.type}>{data.type === "benefit" ? "제휴혜택" : "프로모션"}</p>
        <h3>{data.title}</h3>
        <p>{data.start && `${data.start} ~ `}{data.end}</p>
      </div>
    </EventLink>
  );
}

export default EventDetail;

