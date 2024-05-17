import MoveButton from "../components/common/MoveButton";
import { BgDot, InnerContainer, colors } from "../styles/GlobalStyle";
import { styled } from "styled-components";

const NotFoundPage = () => {
  return (
    <BgDot>
      <ErrorWrapper>
        <img src="/images/icons/icon_error.png" alt="not found" />
        <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
        <p>방문하시려는 페이지의 주소가 잘못 입력되었거나,<br />
          페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.<br />
          입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.</p>
        <MoveButton text="메인으로 이동" to="/" className="dark large" />
      </ErrorWrapper>
    </BgDot>
  )
};

export default NotFoundPage;

const ErrorWrapper = styled(InnerContainer)`
  min-height: calc(100vh - 709px);
  padding: 150px 0 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    width: 100%;
    max-width: fit-content;
    margin-bottom: 30px;
  }

  > p {
    text-align: center;
    margin-top: 8px;
    color: ${colors.font}
  }
`;