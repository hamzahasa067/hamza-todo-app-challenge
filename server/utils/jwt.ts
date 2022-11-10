import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
export const maxAge = 3 * 24 * 60 * 60
export const createToken = (id: number) => {
  const secret = process.env.TOEKN_SECRET
  if (!secret) throw new Error("No TOEKN_SECRET was provided")
  return jwt.sign({ id }, secret, {
    expiresIn: maxAge,
  })
}
