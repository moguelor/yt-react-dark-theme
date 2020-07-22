import styled from "styled-components";

export default styled.div`
  font-size: ${({ fontSize = "25px" }) => fontSize};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
  margin: 0px 10px;
`;
