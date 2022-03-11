import styled, {createGlobalStyle} from "styled-components";


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
