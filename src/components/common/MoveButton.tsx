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
      <ALink href={to} className={className} target="_blank" rel="noopener noreferrer">{text}</ALink>
    ) : (
      <ButtonLink to={to} className={className}>{text}</ButtonLink>
    )
  )
};

export default MoveButton;

// 기본 button colors.primary
const buttonStyle = css`
  min-width: 160px;
  min-height: 45px;
  margin: 40px auto 0;
  background-color: ${colors.primary};
  border-radius: 35px;
  border: none;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  line-height: 45px;
  display: inline-block;
  box-sizing: border-box;
  padding: 0 10px;

  &.whiteRed {
    background-color: #fff;
    color: ${colors.redbtn};
  }
  &.red {
    background-color: ${colors.redbtn};
    color: #fff;
  }

  &.dark {
    color: #fff;
    background-color: ${colors.dark};
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
    min-height: 60px;
    font-size: 1.4rem;
    line-height: 60px;
  }
`

const ALink = styled.a`
  ${buttonStyle}
`

const ButtonLink = styled(Link)`
  ${buttonStyle}
`