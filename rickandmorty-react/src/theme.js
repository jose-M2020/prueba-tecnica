import { createContext, useState, useMemo } from "react";

// context for color mode
const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const useThemeColor = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  return [colorMode];
};

export { ColorModeContext, useThemeColor }