"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// get the client
const dotenv_1 = __importDefault(require("dotenv"));
const mysql2_1 = __importDefault(require("mysql2"));
dotenv_1.default.config();
// Create the connection pool. The pool-specific settings are the defaults
console.log(process.env.DATABASE_URL, process.env.DATABASE_USERNAME);
const pool = mysql2_1.default.createPool({
    host: process.env.DATABASE_URL,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
const connections = pool.promise();
exports.default = connections;
