export interface ICreateUser {
  email: string
  password: string
  name: string
}
export interface ISavedCreatedUser {
  email: string
  encrypted_password: string
  name: string
}
export interface IUser {
  id: number
  email: string
  name: string
  encrypted_password: string
  avatar_link?: string
}
