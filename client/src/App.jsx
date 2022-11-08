import "./App.css"
import Header from "./Components/Header"
import { Outlet, redirect, useHref, useLocation } from "react-router-dom"
import ThemeContextProvider from "./contexts/themeContext"
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <Outlet />
      </ThemeContextProvider>
    </div>
  )
}

export default App
