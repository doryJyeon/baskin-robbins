import MoveButton from "../components/common/MoveButton";
import { InnerContainer } from "../styles/GlobalStyle";
import { styled } from "styled-components";

const NotFoundPage = () => {
  return (
    <ErrorWrapper>
      <img src="/images/icons/icon_error.png" alt="not found" />
      <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
      <p>입력하신 주소가 정확한지 다시 한번 확인해주시기 바랍니다.</p>
      <MoveButton text="메인으로 이동" to="/" className="dark large" />
    </ErrorWrapper>
  )
};

export default NotFoundPage;

const ErrorWrapper = styled(InnerContainer)`
  min-height: calc(100vh - 160px);
  flex-direction: column;
  justify-content: center;

  > img {
    max-width: 100%;
    margin-bottom: 50px;
  }

  > p {
    text-align: center;
    margin-top: 5px;
  }
`;