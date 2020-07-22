import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

const WrapperCard = styled.div`
  width: ${({ width = "200px" }) => width};
  height: ${({ height = "120px" }) => height};
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 2px;
  margin: 5px;
  flex-grow: 1;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 10px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
`;

const Title = styled(Text)`
  font-weight: 600;
  font-size: 18px;
`;

const Info = styled.div`
  color: ${({ theme }) => theme.colors.text2};
  font-weight: 300;
  font-size: 70px;
`;

const Card = ({ title, height, text }) => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <WrapperCard height={height}>
      <Title>{title}</Title>
      <Info>{text}</Info>
    </WrapperCard>
  );
};

export default Card;
