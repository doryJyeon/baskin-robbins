import { InnerContainer, TypeWrapper } from "../styles/GlobalStyle";
import { FaSearch } from "react-icons/fa";
import { Searchform } from "../components/Header/style";
import { NoResult, SearchResultH4 } from "../components/Search/styled";
import TitleDesc from "../components/common/TitleDesc";
import { checkActive, handleKeyDownEnter, handleSubitCheckSearchValue } from "../utils/utilityFunctions";
import MoveLink from "../components/common/MoveLink";
import { useEffect, useState } from "react";
import { Menu, TotalMenu } from "../interfaces/totalManus";
import { fetchData } from "../api/fetchData";
import SearchResult from "../components/Search/SearchResult";
import { useLocation } from "react-router-dom";
import DataStateComponent from "../components/common/DataStateComponent";

const StoryPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchText = queryParams.get("searchText") || "";
  const searchType = queryParams.get("searchType") || "all";

  const [data, setData] = useState<TotalMenu | null>(null);
  const [dataState, setDataState] = useState("Loading");
  const [dataLength, setDataLength] = useState(0);

  // data menu name || tags filtering
  const filterSearchTextType = (menuData: TotalMenu) => {
    const replaceType = searchType.replaceAll("_", " ");
    const filteredMenu: TotalMenu = searchType === "all" ? menuData : { [replaceType]: menuData[replaceType] };
    const filteredData: TotalMenu = {};
    let count = 0;

    Object.keys(filteredMenu).forEach(menuName => {
      const menu = filteredMenu[menuName];
      const filteredFlavors: { [flavorName: string]: Menu } = {};

      Object.keys(menu.menus).forEach(flavorName => {
        const flavor = menu.menus[flavorName];
        if (flavorName.includes(searchText) || flavor.tags.includes(searchText)) {
          filteredFlavors[flavorName] = flavor;
          count++;
        }
      });

      if (Object.keys(filteredFlavors).length > 0) {
        filteredData[menuName] = {
          ...menu,
          menus: filteredFlavors
        };
      }
    });

    setDataLength(count);
    count > 0 ? setDataState("") : setDataState("No Data");
    return filteredData;
  };

  // get total menus
  const getData = async () => {
    try {
      setDataState("Loading");
      setData(null);

      const result = await fetchData<TotalMenu>("/data/TotalMenus.json");
      if (result) {
        setData(filterSearchTextType(result));
      } else {
        setDataState("No Data");
      }
    } catch (error) {
      console.error('Error fetching TotalMenus data:', error);
      setDataState("Error");
    }
  };

  useEffect(() => {
    searchText && getData();
  }, [searchText, searchType]);

  return (
    <InnerContainer top="160px">

      <TitleDesc title={'검색'} />

      <Searchform action="/search">
        <input
          type="text"
          name="searchText"
          placeholder={searchText === "" ? "제품명을 입력하세요" : searchText}
          onKeyDown={handleKeyDownEnter}
        />
        <button className="submit" type="submit" onClick={handleSubitCheckSearchValue}><FaSearch /></button>
      </Searchform>

      <SearchResultH4>
        <span className="font__deep">{searchText}</span> 검색 결과 총 {dataLength}건
      </SearchResultH4>

      <TypeWrapper>
        <MoveLink text={"전체"} to={`search?searchText=${searchText}`} isLi={true} isActive={checkActive(searchType, "all")} />
        <MoveLink text={"아이스크림"} to={`search?searchText=${searchText}&searchType=ice_cream`} isLi={true} isActive={checkActive(searchType, "ice_cream")} />
        <MoveLink text={"프리팩"} to={`search?searchText=${searchText}&searchType=prepack`} isLi={true} isActive={checkActive(searchType, "prepack")} />
        <MoveLink text={"아이스크림 케이크"} to={`search?searchText=${searchText}&searchType=ice_cream_cake`} isLi={true} isActive={checkActive(searchType, "icecream_cake")} />
        <MoveLink text={"디저트"} to={`search?searchText=${searchText}&searchType=dessert`} isLi={true} isActive={checkActive(searchType, "dessert")} />
        <MoveLink text={"음료"} to={`search?searchText=${searchText}&searchType=beverage`} isLi={true} isActive={checkActive(searchType, "beverage")} />
        <MoveLink text={"커피"} to={`search?searchText=${searchText}&searchType=coffee`} isLi={true} isActive={checkActive(searchType, "coffee")} />
      </TypeWrapper>

      {dataState !== ""
        ? (
          searchText === ""
            ? <DataStateComponent getState={"No Text"} />
            : <DataStateComponent getState={dataState} />
        ) : (
          data === null || data === undefined
            ? <NoResult>검색 결과가 없습니다</NoResult>
            : <SearchResult data={data} />
        )
      }
    </InnerContainer>
  );
}

export default StoryPage;
