import { Event } from "../interfaces/events";

export const GetEvents = async (): Promise<Event | undefined> => {
  try {
    const response = await fetch("/data/Events.json");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Event = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
