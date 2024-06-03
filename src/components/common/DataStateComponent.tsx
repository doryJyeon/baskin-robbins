
import { styled } from 'styled-components';
import { colors } from '../../styles/GlobalStyle';
import { useEffect, useState } from 'react';

interface Props {
  getState: string
}

const DataStateComponent: React.FC<Props> = ({ getState }) => {
  const [ment, setMent] = useState(["", ""]);

  useEffect(() => {
    getState === "Loading" && setMent(["로딩 중...", "잠시만 기다려주세요."]);
    getState === "No Data" && setMent(["해당 데이터가 없습니다.", ""]);
    getState === "No Text" && setMent(["검색어가 없습니다.", ""]);
    getState === "Error" && setMent(["에러가 발생했습니다.", "다시 시도해주세요."]);
  }, [getState]);

  return (
    <DataStateWrapper>
      <h4>{ment[0]}</h4>
      <p>{ment[1]}</p>
    </DataStateWrapper>
  );
}

export default DataStateComponent;

const DataStateWrapper = styled.section`
  color: ${colors.deep};
  font-size: 1.5rem;
  font-weight: 500;
  min-height: 150px;
  margin-top: 150px;
  margin-bottom: 0;
  text-align: center;

  > p {
    font-size: 1.1rem;
    color: ${colors.font};
  }
`