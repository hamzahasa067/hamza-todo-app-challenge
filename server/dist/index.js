"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = __importDefault(require("./routes/users"));
const ErrorResponse_1 = require("./utils/ErrorResponse");
dotenv_1.default.config();
var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
// app.use(cookieParser())
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/user", users_1.default);
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.message);
    res.status(err.code ? err.code : 500).json(new ErrorResponse_1.ErrorResponse(err.message, Object.assign({}, err)));
});
app.get("/", (req, res) => {
    res.json({ body: "some stuff", other: "Some other stuff" });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running on port:${port}`);
});
