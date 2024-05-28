import React from 'react';
import { styled } from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

interface Props {
  title: string;
  desc: string | undefined;
}

const TitleDesc: React.FC<Props> = ({ title, desc }) => {
  return (
    <TitleDescWrapper>
      <h2>{title}</h2>
      {desc !== undefined && <p dangerouslySetInnerHTML={{ __html: desc }} />}
    </TitleDescWrapper>
  );
}

export default TitleDesc;

const TitleDescWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  color: ${colors.primary};

  > h2 {
    font-size: 5rem;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 50px;
  }
  > p {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 100px;
  }
`