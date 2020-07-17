import styled from "styled-components";

export default styled.div`
  font-size: ${({ fontSize }) => fontSize || "25px"};
  color: ${({theme}) => (theme.colors.text)};
  font-weight: 300;
  margin: 0px 10px;
`;
