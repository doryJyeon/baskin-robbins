export interface Event {
  [eventId: string]: EventDetailProps
}

export interface EventDetailProps {
  title: string;
  img: string;
  type: ("promotion" | "benefit");
  start: string | null;
  end: string;
  detail_img: string;
}
