import { Link } from "react-router-dom";
import { css, styled } from "styled-components";
import { colors } from "../../styles/GlobalStyle";

interface Props {
  text: string;
  to: string;
  className?: string;
  blank?: boolean;
}

const MoveButton: React.FC<Props> = ({ text, to, className, blank }) => {
  return (
    blank ? (
      <ALink href={to} target="_blank" rel="noopener noreferrer">{text}</ALink>
    ) : (
      <ButtonLink to={to} className={className}>{text}</ButtonLink>
    )
  )
};

export default MoveButton;

// 기본 button colors.primary
const buttonStyle = css`
  min-width: 150px;
  margin: 50px auto 0;
  background-color: ${colors.primary};
  border-radius: 35px;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  padding: 10px 20px;

  &.dark {
    background-color: ${colors.dark};
    color: #fff;
  }

  &.bg-trans {
    background-color: transparent;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }

  &.dark-trans {
    background-color: transparent;
    color: ${colors.dark};
    border: 1px solid ${colors.dark};
  }

  &.large {
    min-width: 200px;
    font-size: 1.5rem;
    padding: 15px 30px;
  }
`

const ALink = styled.a`
  ${buttonStyle}
`

const ButtonLink = styled(Link)`
  ${buttonStyle}
`