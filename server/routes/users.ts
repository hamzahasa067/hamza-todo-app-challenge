import { Router } from "express";
import { handleSignUp } from "../controllers/users"
const router = Router();

router.post("/signup", handleSignUp);
router.post("/login");
router.post("/logout");

router.put("/update");
router.delete("/delete");


export default router;
// router.get("/", )