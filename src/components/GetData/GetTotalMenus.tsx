import { TotalMenu } from "../../interfaces/totalManus";

export const GetTotalMenus = async (): Promise<TotalMenu | undefined> => {
  try {
    const response = await fetch("/data/TotalMenus.json");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: TotalMenu = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
