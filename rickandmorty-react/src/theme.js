import { createContext, useState, useMemo } from "react";

const colors = ['green', 'red', 'blue'];
// const modes = ['light', 'dark'];

const ThemeColorContext = createContext({
  themeColor: '',
  setThemeColor: () => {},
});

const useThemeColor = () => {
  const [themeColor, setThemeColor] = useState(colors[0]);

  const theme = useMemo(
    () => ({
      themeColor,
      setThemeColor,
    }),
    [themeColor]
  );

  return theme;
};

const useMode = () => {
  const [mode, setMode] = useState(colors[0]);

  const themeMode = useMemo(
    () => ({
      mode,
      toggleMode: (mode) => setMode(mode),
    }),
    [mode]
  );

  return themeMode;
};

export { ThemeColorContext, useThemeColor, useMode }