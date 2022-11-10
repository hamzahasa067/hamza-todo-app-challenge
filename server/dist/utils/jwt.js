"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = exports.maxAge = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    const secret = process.env.TOEKN_SECRET;
    if (!secret)
        throw new Error("No TOEKN_SECRET was provided");
    return jsonwebtoken_1.default.sign({ id }, secret, {
        expiresIn: exports.maxAge,
    });
};
exports.createToken = createToken;
