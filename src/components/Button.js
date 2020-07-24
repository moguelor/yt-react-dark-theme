import React from "react";
import styled from "styled-components";

/**
 * Recuerda afectar el tema en los componentes
 * donde necesitemos.
 */
const StyledButton = styled.button`
  background: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.text2};
  color: ${({ theme }) => theme.colors.text2};
  border-radius: 5px;
  font-size: 15px;
`;

const Button = ({ handleClick }) => {
  return <StyledButton onClick={handleClick}>Toggle Theme</StyledButton>;
};

export default Button;
