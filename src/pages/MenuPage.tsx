import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InnerContainer } from "../styles/GlobalStyle";
import { MenuInfo, TotalMenu } from "../interfaces/totalManus";
import MenuLinks from "../components/Menu/MenuLinks";
import Menus from "../components/Menu/Menus";
import { MenusWrapper } from "../components/Menu/styled";
import FlavorOfMonth from "../components/Menu/FlavorOfMonth";
import { fetchData } from "../api/fetchData";
import DataStateComponent from "../components/common/DataStateComponent";


const MenuPage = () => {
  const { type } = useParams<{ type?: string }>();
  const menuType = type ? type.replace(/_/g, " ") : "ice cream";

  const [data, setData] = useState<MenuInfo | null>(null);
  const [dataState, setDataState] = useState("Loading");

  // get total menus
  const getData = async () => {
    try {
      setDataState("Loading");
      setData(null);

      const result = await fetchData<TotalMenu>("/data/TotalMenus.json");
      if (result && result[menuType]) {
        setData(result[menuType]);
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
  }, [menuType]);

  return (
    <InnerContainer top="160px" mTop="114px" mBottom="126px">
      <MenuLinks menuType={menuType} />

      <MenusWrapper>
        {menuType === "month"
          ? <FlavorOfMonth />
          : (<>
            {dataState !== "" && <DataStateComponent getState={dataState} />}
            {data && <Menus data={data} menuType={menuType} />}
          </>)
        }
      </MenusWrapper>
    </InnerContainer>
  );
}

export default MenuPage;
