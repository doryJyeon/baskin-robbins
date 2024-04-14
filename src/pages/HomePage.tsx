import { styled } from "styled-components"
import { InnerContainerFirst, colors } from "../styles/GlobalStyle"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <HomeWrapper>
      <HomeFrame>
        <HomeEventWrapper>
          <Event to="/1">
            <img src="" alt="" />
            <p className="small">이벤트1</p>
            <p>이벤트 상세 설명 내용 어쩌구 저쩌구 좀 더 길게 있어야행</p>
          </Event>

          <Event to="/2">
            <img src="" alt="" />
            <p className="small">이벤트2</p>
            <p>이벤트 상세 설명 내용 어쩌구 저쩌구 좀 더 길게 있어야행</p>
          </Event>

          <Event to="/3">
            <img src="" alt="" />
            <p className="small">이벤트3</p>
            <p>이벤트 상세 설명 내용 어쩌구 저쩌구 좀 더 길게 있어야행</p>
          </Event>
        </HomeEventWrapper>
      </HomeFrame>
    </HomeWrapper>
  )
}

export default HomePage

const HomeWrapper = styled(InnerContainerFirst)`
  background-color: ${colors.light};
  // background-image: url("/images/main/bg_hero_frame.png");
  // background-repeat: no-repeat;
  // background-size: 100%;
  // background-position: center top 30px;

  max-height: 850px;
  height: 850px;
  padding: 30px 0 0;

`;

const HomeFrame = styled.div`
  background-image: url("/images/main/new_flavor.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 100%;
  max-height: 850px;
`

const HomeEventWrapper = styled.div`

`

const Event = styled(Link)`

`