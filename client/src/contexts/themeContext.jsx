import React from "react"

export const ThemeContext = React.createContext("light")
export const ToggleThemeContext = React.createContext()

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState("light")
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <ThemeContext.Provider value={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
