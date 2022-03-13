import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-content: space-between;
  font-family: Arial;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  
  div:not(:first-child) {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
