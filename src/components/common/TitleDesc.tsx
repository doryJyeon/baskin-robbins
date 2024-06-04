import React from 'react';
import { styled } from 'styled-components';
import { colors, pointFont } from '../../styles/GlobalStyle';

interface Props {
  title: string;
  subTitle?: string;
  desc?: string;
}

const TitleDesc: React.FC<Props> = ({ title, subTitle, desc }) => {
  return (
    <TitleDescWrapper>
      <h2>{title}</h2>
      {subTitle && <h3>{subTitle}</h3>}
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
    font-family: ${pointFont};
    font-size: 5.6rem;
    font-weight: 800;
    text-transform: capitalize;
    margin-bottom: 50px;
  }
  > h3 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  > p {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 100px;
  }

  @media (max-width: 1024px) {
    margin-top: 34px;

    > h2 {
      font-size: 1.9rem;
      font-weight: 700;
      margin-bottom: 27px;
    }
    > h3 {
      font-size: .875rem;
      margin-bottom: 0;
    }
    > p {
      margin-top: 7px;
      font-size: .85rem;
      line-height: 1.3;
      font-weight: 500;
      margin-bottom: 34px;
    }
  }
`