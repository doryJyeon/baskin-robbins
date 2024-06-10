import { styled } from "styled-components";
import { colors } from "../../styles/GlobalStyle";
import { MenusUl } from "../Menu/styled";

export const SearchResultH4 = styled.h4`
  display: block;
  width: 100%;
  margin: 80px 0 50px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 999px) {
    width: calc(100% - 34px);
    padding: 0 17px;
    margin: 44px 0 -36px;
    text-align: left;
    font-size: 0.95rem;
    color: ${colors.font};
  }
`

export const NoResult = styled.h2`
  color: ${colors.font};
  font-size: 1.2rem;
  font-weight: 500;
  min-height: 200px;
  margin-top: 80px;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 999px) {
    color: ${colors.border};
  }
`

export const SearchWrapper = styled(MenusUl)`
  min-height: 200px;
  margin-top: 80px;
  margin-bottom: 50px;
  text-align: center;
`