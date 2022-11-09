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
exports.handleSignUp = void 0;
const validator_1 = __importDefault(require("validator"));
const database_1 = __importDefault(require("../utils/database"));
const errorHandlers_1 = require("../utils/errorHandlers");
const bcrypt_1 = __importDefault(require("bcrypt"));
const handleSignUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = req.body;
    const errors = {};
    try {
        if (!validator_1.default.isEmail(email))
            throw (errors.email = "The email you entered is invalid");
        if (password < 6)
            throw (errors.password =
                "The password you entered is invalid , password must be minimum than 6 characters");
        if ((name === null || name === void 0 ? void 0 : name.length) < 6)
            throw (errors.password =
                "The name you entered is invalid, name must be minimum than 6 characters");
        if (errors.email || errors.name || errors.password)
            throw new errorHandlers_1.AuthError("", errors);
        const salt = yield bcrypt_1.default.genSalt();
        const encrypted_password = yield bcrypt_1.default.hash(password, salt);
        const result = yield database_1.default.query("INSERT INTO users(name,email,encrypted_password) VALUES(?,?,?)", [name, email, encrypted_password]);
        res.json(result);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
exports.handleSignUp = handleSignUp;
