import { Router } from "express"
import { handleSignUp, handleDelete } from "../controllers/users"
import validateSignupData from "../middlewares/validateSignupData"
import { requireAuth } from "../middlewares/varifyToken"
const router = Router()

router.post("/signup", validateSignupData, handleSignUp)
router.post("/login")
router.post("/logout", requireAuth)

router.put("/update", requireAuth)
router.delete("/delete/:userId", requireAuth, handleDelete)

export default router
// router.get("/", )
