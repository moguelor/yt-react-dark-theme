import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background-color: ${({theme}) => (theme.colors.background)};
  transition: all 0.15s linear;
`;
