import { ISavedCreatedUser } from "../../interfaces/user"
declare global {
  namespace Express {
    export interface Request {
      //   language?: Language
      user?: ISavedCreatedUser
      user_id?: number
    }
  }
}
