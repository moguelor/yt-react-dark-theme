import React from "react";
import { Card, Column, Text, GlobalStyles, Button } from "./components";
import { ThemeProvider } from "styled-components";
import { useThemeMode } from "./hooks";

/**
 * Esta es la configuración de nuestro temas
 * aqui podrías agregar los que necesites y tener una
 * gran variedad para tus usuarios.
 */
const themes = {
  default: {
    colors: {
      background: "#f1f1f1", // Color de fondo
      surface: "#FFF", // Color de fondo de tarjetas.
      text: "#989898", // Color del texto
      text2: "#000", // Color de las cantidades
    },
  },
  dark: {
    colors: {
      background: "#23292d",
      surface: "#32383b",
      text: "#FFF",
      text2: "#317e94",
    },
  },
};

function App() {

  /**
   * El uso de nuestro custom hook.
   */
  const [theme, toggleTheme] = useThemeMode();

  return (
    /**
     * Recuerda que el componente ThemeProvider, recibe una prop
     * theme, esta la estamos generando con ayuda de nuestra variable
     * de estado "theme" ya que ahi tenemos el nombre del tema actual, 
     * y accedemos a nuestra configuración de "theme" para obtener 
     * el objeto.
     */
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Column>
        <Text>Weekly Stats - Moguelo Dev</Text>
        <Button handleClick={toggleTheme} />
      </Column>
      <Column>
        <Card title="Marketing" text="25%" />
        <Card title="Conversion" text="4.3M" />
        <Card title="Users" text="+20M" />
      </Column>
      <Column>
        <Card title="Sales" height="120px" text="$0.00" />
      </Column>
    </ThemeProvider>
  );
}

export default App;
