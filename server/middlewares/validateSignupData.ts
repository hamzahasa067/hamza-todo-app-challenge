import { NextFunction, Request, Response } from "express"
import validator from "validator"
import connections from "../utils/database"
import { AuthError, IFiledErrors, NotFoundError } from "../utils/errorHandlers"
import bcrypt from "bcrypt"
import { SuccessResponse } from "../utils/successResponse"
import { ICreateUser, ISavedCreatedUser } from "../interfaces/user"
export default async function validateSignupData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, name, password }: ICreateUser = req.body
  const errors: IFiledErrors = {}
  try {
    if (!validator.isEmail(email))
      errors.email = "The email you entered is invalid"
    if (password?.length < 6)
      errors.password =
        "The password you entered is invalid , password must be minimum than 6 characters"
    if (name?.length < 6)
      errors.password =
        "The name you entered is invalid, name must be minimum than 6 characters"
    if (errors.email || errors.name || errors.password)
      throw new AuthError("", errors)

    const salt = await bcrypt.genSalt()
    const encrypted_password = await bcrypt.hash(password, salt)

    const user: ISavedCreatedUser = {
      encrypted_password,
      email,
      name,
    }
    req.user = user
    next()
  } catch (error: unknown) {
    next(error)
  }
}
// export const handleDelete = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { userId } = req.params

//   try {
//     const [info, data] = await connections.query(
//       "DELETE FROM users WHERE users.id = ?",
//       [Number(userId)]
//     )

//     if (info.affectedRows < 1)
//       throw new NotFoundError("No user(s) with this id: " + userId)
//     res.json(new SuccessResponse(info))
//   } catch (error: unknown) {
//     next(error)
//   }
// }
