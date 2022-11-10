"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDelete = exports.handleSignUp = void 0;
const database_1 = __importDefault(require("../utils/database"));
const errorHandlers_1 = require("../utils/errorHandlers");
const successResponse_1 = require("../utils/successResponse");
const jwt_1 = require("../utils/jwt");
const handleSignUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        if (!((_a = req.user) === null || _a === void 0 ? void 0 : _a.name) || !((_b = req.user) === null || _b === void 0 ? void 0 : _b.email) || !((_c = req.user) === null || _c === void 0 ? void 0 : _c.encrypted_password))
            throw new errorHandlers_1.ServerError("No user was provied by the middleware");
        const [info, data] = yield database_1.default.query("INSERT INTO users(name,email,encrypted_password) VALUES(?,?,?)", [req.user.name, req.user.email, req.user.encrypted_password]);
        if (!req.user)
            throw new errorHandlers_1.ServerError("User was not created! ");
        const createdUser = Object.assign(Object.assign({}, req.user), { id: info.insertId });
        const token = (0, jwt_1.createToken)(createdUser.id);
        res.json(new successResponse_1.SuccessResponse({ user: createdUser, token }));
    }
    catch (error) {
        next(error);
    }
});
exports.handleSignUp = handleSignUp;
const handleDelete = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        if (req.user_id !== Number(userId))
            throw new errorHandlers_1.AuthError("No authorized to do this operation");
        const [info, data] = yield database_1.default.query("DELETE FROM users WHERE users.id = ?", [Number(userId)]);
        if (info.affectedRows < 1)
            throw new errorHandlers_1.NotFoundError("No user(s) with this id: " + userId);
        res.json(new successResponse_1.SuccessResponse());
    }
    catch (error) {
        next(error);
    }
});
exports.handleDelete = handleDelete;
