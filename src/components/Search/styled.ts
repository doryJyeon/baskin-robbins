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
`

export const NoResult = styled.h2`
  color: ${colors.font};
  font-size: 1.2rem;
  font-weight: 500;
  min-height: 200px;
  margin-top: 80px;
  margin-bottom: 50px;
  text-align: center;
`

export const SearchWrapper = styled(MenusUl)`
  min-height: 200px;
  margin-top: 80px;
  margin-bottom: 50px;
  text-align: center;
`