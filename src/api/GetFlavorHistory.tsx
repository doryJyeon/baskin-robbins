import { FlavorHistories } from "../interfaces/flavorHistory";

export const GetFlavorHistories = async (): Promise<FlavorHistories | undefined> => {
  try {
    const response = await fetch("/data/FlavorHistory.json");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: FlavorHistories = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
