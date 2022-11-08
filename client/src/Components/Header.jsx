import React, { useContext } from "react"
import { ThemeContext, ToggleThemeContext } from "../contexts/themeContext"

export default function Header() {
  const theme = useContext(ThemeContext)
  const toggleTheme = useContext(ToggleThemeContext)
  console.log(theme)
  return (
    <header>
      <nav></nav>
      <div className="todo-header-container">
        <h1>Todo</h1>
        {/* <ThemeToggler /> */}
      </div>
    </header>
  )
}
