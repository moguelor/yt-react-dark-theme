import React from "react";
import { Card, Column, Text, GlobalStyles, Button } from "./components";
import { ThemeProvider } from "styled-components";
import { useThemeMode } from "./hooks";

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
  const [theme, toggleTheme] = useThemeMode();

  return (
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
