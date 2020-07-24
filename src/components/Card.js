import React, { useContext } from "react";
import styled from "styled-components";
import Text from "./Text";
import { ThemeContext } from "styled-components";

/**
 * Los componentes WrapperCard, Title e Info, los mantuve en este archivo
 * ya que no los utilizamos en ningun otro lado mas, si no lo sacaria en nuestra 
 * carpeta de /components ya que ahi estan los componentes reutilizables.
 */
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
  /**
   * No solamente tenemos acceso al valor del tema en componentes
   * como los de arriba si no en cualquier otro componente de react.
   * Estamos utilizando con "ThemeContext" para obtener el tema activo
   * y asi poder usar sus valores si se desea.
   */
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
