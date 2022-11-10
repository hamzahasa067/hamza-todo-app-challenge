import { NextFunction, Request, Response } from "express"
import connections from "../utils/database"
import { AuthError, NotFoundError, ServerError } from "../utils/errorHandlers"
import { SuccessResponse } from "../utils/successResponse"
import { IUser } from "../interfaces/user"
import { createToken, maxAge } from "../utils/jwt"
export const handleSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user?.name || !req.user?.email || !req.user?.encrypted_password)
      throw new ServerError("No user was provied by the middleware")
    const [info, data] = await connections.query(
      "INSERT INTO users(name,email,encrypted_password) VALUES(?,?,?)",
      [req.user.name, req.user.email, req.user.encrypted_password]
    )
    if (!req.user) throw new ServerError("User was not created! ")

    const createdUser: IUser = {
      ...req.user,
      id: info.insertId,
    }

    const token = createToken(createdUser.id)

    res.json(new SuccessResponse({user:createdUser,token }))
  } catch (error: unknown) {
    next(error)
  }
}
export const handleDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params

  try {
    
    if( req.user_id !== Number(userId)) throw new AuthError("No authorized to do this operation")
    const [info, data] = await connections.query(
      "DELETE FROM users WHERE users.id = ?",
      [Number(userId)]
    )

    if (info.affectedRows < 1)
      throw new NotFoundError("No user(s) with this id: " + userId)
    res.json(new SuccessResponse())
  } catch (error: unknown) {
    next(error)
  }
}
