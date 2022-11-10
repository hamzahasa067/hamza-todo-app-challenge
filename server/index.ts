import express, { Express, NextFunction, Request, Response } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import connections from "./utils/database"

import { ErrorHandler } from "./utils/errorHandlers"

import usersRouter from "./routes/users"
import { ErrorResponse } from "./utils/ErrorResponse"
dotenv.config()

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const port = process.env.PORT

const app: Express = express()

app.use(cors(corsOptions))
// app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/user", usersRouter)

app.use(
  (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    console.error(err.message)
    res.status(err.code ? err.code : 500 ).json(new ErrorResponse(err.message, { ...err }))
  }
)
app.get("/", (req, res) => {
  res.json({ body: "some stuff", other: "Some other stuff" })
})
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on port:${port}`)
})
