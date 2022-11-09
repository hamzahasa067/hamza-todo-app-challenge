"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.AuthError = exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}
exports.ErrorHandler = ErrorHandler;
class AuthError extends ErrorHandler {
    constructor(message, filedErrors) {
        super("Error while authentication: " + message, 400);
        this.filedErrors = filedErrors;
    }
}
exports.AuthError = AuthError;
class ServerError extends ErrorHandler {
    constructor(message) {
        super("Server Error: " + message, 500);
    }
}
exports.ServerError = ServerError;
