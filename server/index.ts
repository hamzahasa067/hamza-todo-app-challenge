import express, { Express, NextFunction, Request, Response } from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connections from "./utils/database"
import { ErrorHandler } from "./utils/errorHandlers"

import usersRouter from "./routes/users";
dotenv.config()

const app: Express = express()
const port = process.env.PORT
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.use("/users",usersRouter )

app.use(
  (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    res.status(err.code).json(err)
  }
)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on port:${port}`)
})
