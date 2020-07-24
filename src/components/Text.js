import styled from "styled-components";

/**
 * Esto es un componente estilizado con styled-components,
 * recuerda que puede funciónar como cualquier otro componente de react,
 * le podemos pasar props, aqui estamos recibiendo las prop "fontSize",
 * para poder reutilizarlo y diferentes partes del proyecto y sea dinamico.
 * 
 * La prop "theme" es la que le pasamos a nuestro <ThemeProvider theme={themes[theme]} />
 * y podemos acceder a los valores del tema actual.
 */
export default styled.div`
  font-size: ${({ fontSize = "25px" }) => fontSize};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
  margin: 0px 10px;
`;
