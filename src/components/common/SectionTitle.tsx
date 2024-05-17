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
  margin-bottom: 50px;

  > h2 {
    font-size: 3.125rem;
    font-weight: 700;
    color: ${props => props.color ? props.color : colors.deep};
  }

  > p {
    font-size: .9rem;
    color: ${props => props.color ? props.color : "#858585"};
  }
`