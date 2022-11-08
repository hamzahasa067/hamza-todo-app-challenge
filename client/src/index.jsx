import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  redirect,
} from "react-router-dom"
import Page404 from "./Errors/404"
import Todos from "./Components/Todos"
import User from "./Components/User"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Todos />,
      },
      {
        path: "/user",
        // loader: () => redirect("/"),
        element: <User />,
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
