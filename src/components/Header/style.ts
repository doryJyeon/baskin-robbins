import styled from "styled-components";
import { Container, colors } from "../../styles/GlobalStyle";

const headerHeight = "90px";

interface Props {
  scroll: boolean;
}

export const HeaderWrapper = styled.header<Props>`
  width: 100%;
  height: ${headerHeight};
  background-color: ${props => props.scroll ? colors.primary : "transparent"};
  position: fixed;
  z-index: 500;
`;

export const HeaderContainer = styled(Container)`
  margin: auto;
  height: ${headerHeight};
  display: flex;
  align-items: center;
  gap: 20px;
`

export const LogoImage = styled.img`
  width: auto;
  height: 60px;
  margin-right: 40px;
`;

export const MenuWrapper = styled.div<Props>`
  > a {
    color: ${props => props.scroll ? "#fff" : colors.dark};
    font-size: 1.1rem;
    font-weight: bold;
    margin-right: 20px;
  }
`;

export const SearchWrapper = styled.input<Props>`
  width: 180px;
  height: 1.5rem;
  margin-left: auto;
  border: none;
  outline: none;
  font-size: 1.1rem;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: left top 3px;
  background-size: 1.1rem;
  padding-left: 1.4rem;
  background-image: url("/images/icons/btn_search.png");
  border-bottom: 2px solid ${colors.primary};
  color: ${colors.dark};
  
  ${props => props.scroll && 
    "border-bottom-color: #fff; background-image: url(/images/icons/btn_search_white.png);"
  }

  &::placeholder {
    font-size: 1rem;
    color: #33333350;
    ${props => props.scroll && 
      "color: #ffffff90;"
    }
  }
`;

export const SignWrapper = styled.div<Props>`
  font-size: 1.8rem;
  vertical-align: bottom;

  > a {
    color: ${props => props.scroll ? "#fff" : colors.dark}
  }
`;