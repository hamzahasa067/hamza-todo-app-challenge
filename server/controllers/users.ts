import { Express, NextFunction, Request, Response } from "express"
import validator from "validator"
import connections from "../utils/database"
import { AuthError, IFiledErrors } from "../utils/errorHandlers"
import bcrypt from "bcrypt"
export const handleSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, name, password } = req.body
  const errors: IFiledErrors = {}
  try {
    if (!validator.isEmail(email))
      throw (errors.email = "The email you entered is invalid")
    if (password < 6)
      throw (errors.password =
        "The password you entered is invalid , password must be minimum than 6 characters")
    if (name?.length < 6)
      throw (errors.password =
        "The name you entered is invalid, name must be minimum than 6 characters")
    if (errors.email || errors.name || errors.password)
      throw new AuthError("", errors)

    const salt = await bcrypt.genSalt()
    const encrypted_password = await bcrypt.hash(password, salt)
    const result = await connections.query(
      "INSERT INTO users(name,email,encrypted_password) VALUES(?,?,?)",
      [name, email, encrypted_password]
    )

    res.json(result)
  } catch (error: unknown) {
    console.error(error)
    next(error)
  }
}
