import { styled } from "styled-components";
import { colors } from "../../styles/GlobalStyle";

interface Props {
  title: string;
  subTitle?: string;
  color?: string;
}

const SectionTitle: React.FC<Props> = ({ title, subTitle, color }) => {
  return (
    <TitleWrapper color={color}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </TitleWrapper>
  );
}

export default SectionTitle;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 80px;

  > h2 {
    font-size: 3.125rem;
    font-weight: 700;
    color: ${colors.deep};
  }

  > p {
    font-size: .8rem;
    color: #858585;
  }
`