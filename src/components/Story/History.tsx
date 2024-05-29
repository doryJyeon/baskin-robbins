import { Link, useLocation } from 'react-router-dom';
import MoveLink from '../common/MoveLink';
import TitleDesc from '../common/TitleDesc';
import { HistoryImgWrapper, HistoryMenuWrapper, MenuThema, TypeWrapper } from './styled';
import { getDate } from '../../utils/dateUtils';
import { checkActive } from '../../utils/utilityFunctions';

type HistoryType = "year" | "thema";

const History = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const paramHistory = queryParams.get("type");
  const paramType: HistoryType = (paramHistory === "year" || paramHistory === "thema") ? paramHistory : "year";
  const paramDetail: string = queryParams.get("detail") || (paramType === "year" ? getDate("Year")!.toString() : "back");

  const thisURL = `story/history/?type=`;

  return (
    <>
      <TitleDesc title={'이달의 맛 히스토리'} desc={"일년 열 두 달 새로운 맛, 배스킨라빈스 이달의 맛 히스토리"} />

      <TypeWrapper>
        <MoveLink text={"연도별 보기"} to={`${thisURL}year`} isLi={true} isActive={checkActive(paramType, "year")} />
        <MoveLink text={"테마별 보기"} to={`${thisURL}thema`} isLi={true} isActive={checkActive(paramType, "thema")} />
      </TypeWrapper>

      <HistoryMenuWrapper show={paramType}>
        <ul className="menu__year">
          <MoveLink text={'2024'} to={`${thisURL}year&detail=2024`} isLi={true} isActive={checkActive(paramDetail, "2024")} />
          <MoveLink text={'2023'} to={`${thisURL}year&detail=2023`} isLi={true} isActive={checkActive(paramDetail, "2023")} />
          <MoveLink text={'2022'} to={`${thisURL}year&detail=2022`} isLi={true} isActive={checkActive(paramDetail, "2022")} />
          <MoveLink text={'2021'} to={`${thisURL}year&detail=2021`} isLi={true} isActive={checkActive(paramDetail, "2021")} />
          <MoveLink text={'2020'} to={`${thisURL}year&detail=2020`} isLi={true} isActive={checkActive(paramDetail, "2020")} />
          <MoveLink text={'2019'} to={`${thisURL}year&detail=2019`} isLi={true} isActive={checkActive(paramDetail, "2019")} />
          <MoveLink text={'2018'} to={`${thisURL}year&detail=2018`} isLi={true} isActive={checkActive(paramDetail, "2018")} />
        </ul>
        <ul className="menu__thema">
          <MenuThema icon={"icon_is_back"} active={checkActive(paramDetail, "back")}>
            <Link to={`/${thisURL}thema&detail=back`}>배라이즈백</Link>
          </MenuThema>
          <MenuThema icon={"icon_legend"} active={checkActive(paramDetail, "legend")}>
            <Link to={`/${thisURL}thema&detail=legend`}>레전더리플레이버</Link>
          </MenuThema>
          <MenuThema icon={"icon_gray"} active={checkActive(paramDetail, "great")}>
            <Link to={`/${thisURL}thema&detail=great`}>그래이맛어워드</Link>
          </MenuThema>
        </ul>
      </HistoryMenuWrapper>

      <HistoryImgWrapper>
        <img src="/images/flavor_history/2024/2024 (1).jpg" alt="" />
      </HistoryImgWrapper>
    </>
  );
}

export default History;
