import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InnerContainer } from "../styles/GlobalStyle";
import { MenuInfo } from "../interfaces/totalManus";
import { GetTotalMenus } from "../components/GetData/GetTotalMenus";
import MenuLinks from "../components/Menu/MenuLinks";
import Menus from "../components/Menu/Menus";
import { MenusWrapper } from "../components/Menu/styled";
import FlavorOfMonth from "../components/Menu/FlavorOfMonth";
import TitleDesc from "../components/Menu/TitleDesc";


const MenuPage = () => {
  const { type } = useParams<{ type?: string }>();
  const menuType = type ? type.replace(/_/g, " ") : "ice cream";

  const [data, setData] = useState<MenuInfo | null>(null);
  const [dataState, setDataState] = useState("Loading");

  // get total menus
  const fetchData = async () => {
    try {
      setDataState("Loading");
      setData(null);

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
        {menuType === "month"
          ? <FlavorOfMonth />
          : (<>
            {dataState === "Loading" && <TitleDesc title={"Loding..."} desc={"잠시만 기다려주세요..."} />}
            {dataState === "Error" && <TitleDesc title={"Error..."} desc={"에러가 발생했습니다.<br />다시 시도해주세요!"} />}
            {dataState === "No Data" && <TitleDesc title={"No Data..."} desc={undefined} />}
            {data && <Menus data={data} menuType={menuType} />}
          </>)
        }
      </MenusWrapper>
    </InnerContainer>
  );
}

export default MenuPage;