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
const validator_1 = __importDefault(require("validator"));
const errorHandlers_1 = require("../utils/errorHandlers");
const bcrypt_1 = __importDefault(require("bcrypt"));
function validateSignupData(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, name, password } = req.body;
        const errors = {};
        try {
            if (!validator_1.default.isEmail(email))
                errors.email = "The email you entered is invalid";
            if ((password === null || password === void 0 ? void 0 : password.length) < 6)
                errors.password =
                    "The password you entered is invalid , password must be minimum than 6 characters";
            if ((name === null || name === void 0 ? void 0 : name.length) < 6)
                errors.password =
                    "The name you entered is invalid, name must be minimum than 6 characters";
            if (errors.email || errors.name || errors.password)
                throw new errorHandlers_1.AuthError("", errors);
            const salt = yield bcrypt_1.default.genSalt();
            const encrypted_password = yield bcrypt_1.default.hash(password, salt);
            const user = {
                encrypted_password,
                email,
                name,
            };
            req.user = user;
            next();
        }
        catch (error) {
            next(error);
        }
    });
}
exports.default = validateSignupData;
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
