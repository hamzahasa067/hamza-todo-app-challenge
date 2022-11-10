"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const validateSignupData_1 = __importDefault(require("../middlewares/validateSignupData"));
const varifyToken_1 = require("../middlewares/varifyToken");
const router = (0, express_1.Router)();
router.post("/signup", validateSignupData_1.default, users_1.handleSignUp);
router.post("/login");
router.post("/logout", varifyToken_1.requireAuth);
router.put("/update", varifyToken_1.requireAuth);
router.delete("/delete/:userId", varifyToken_1.requireAuth, users_1.handleDelete);
exports.default = router;
// router.get("/", )
