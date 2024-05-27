import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InnerContainer } from "../styles/GlobalStyle";
import { MenuInfo } from "../interfaces/totalManus";
import { GetTotalMenus } from "../components/GetData/GetTotalMenus";
import MenuLinks from "../components/Menu/MenuLinks";
import Menus from "../components/Menu/Menus";
import { MenusWrapper } from "../components/Menu/styled";


const MenuPage = () => {
  const { type } = useParams<{ type?: string }>();
  const menuType = type ? type.replace(/_/g, " ") : "ice cream";

  const [data, setData] = useState<MenuInfo | null>(null);
  const [dataState, setDataState] = useState("Loading");

  // get total menus
  const fetchData = async () => {
    try {
      setDataState("Loading");
      const result = await GetTotalMenus();
      if (result && result[menuType]) {
        setData(result[menuType]);
        setDataState("");
      } else {
        setDataState("No Data");
      }
    } catch (error) {
      console.error('Error fetching TotalMenus data:', error);
      setDataState("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, [menuType]);

  return (
    <InnerContainer top="160px">
      <MenuLinks menuType={menuType} />

      <MenusWrapper>
        {dataState === "Loading" && <p>Loading...</p>}
        {dataState === "Error" && <p>Error loading data.</p>}
        {dataState === "No Data" && <p>No data available.</p>}
        {data && <Menus data={data} menuType={menuType} />}
      </MenusWrapper>
    </InnerContainer>
  );
}

export default MenuPage;
