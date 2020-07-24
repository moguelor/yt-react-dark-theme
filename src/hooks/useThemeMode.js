import { useState, useEffect } from "react";

/**
 * Nuestro custom hook donde encapsula
 * la lógica del componente para intercambiar
 * entre el tema dark y el default.
 */
const useThemeMode = () => {

  /**
   * Usamos el localStorage ya que tuvimos un problema
   * al recargar la página se reinicia el state y regresa a nuestro
   * tema default, para evitar esto guardamos el nombre del tema
   * en el localStorage para mantener la selección del usuario,
   * incluso cuando se recargue la página.
   */
  const localTheme = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState("default");

  /**
   * El hook useEffect(), nos ayuda a representar el 
   * ciclo de vida componentDidMount, ya que le estamos pasando
   * un arreglo vacio y nos sirve para asignar el tema si existe 
   * en el localStorage.
   */
  useEffect(() => {
    localTheme && setTheme(localTheme);
  }, []);

  /**
   * Esta función simplemente hace el intercambio entre
   * temas si el activo es dark lo cambia default y si es default
   * lo cambia a dark.
   */
  const toggleTheme = () => {
    if (theme === "default") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
      return;
    }

    window.localStorage.setItem("theme", "default");
    setTheme("default");
  };

  /**
   * Nuestro custom hook retorna nuestra variable de 
   * estado y la función que realiza el toggle al tema.
   */
  return [theme, toggleTheme];
};

export default useThemeMode;
