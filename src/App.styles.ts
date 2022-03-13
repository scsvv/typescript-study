import styled, {createGlobalStyle} from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.section`
    & > div {
      margin: 0 auto;
      padding: 10px;
      width: 100%;
    }
  
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`
