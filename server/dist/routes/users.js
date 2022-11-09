"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.post("/signup", users_1.handleSignUp);
router.post("/login");
router.post("/logout");
router.put("/update");
router.delete("/delete");
exports.default = router;
// router.get("/", )
