"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_TOKEN = exports.SALT_ROUNDS = exports.BCRYPT_PASSWORD = exports.POSTGRES_PASSWORD = exports.POSTGRES_USER = exports.POSTGRES_DB_TEST = exports.POSTGRES_DB_DEV = exports.POSTGRES_PORT = exports.POSTGRES_HOST = exports.ENV = exports.PORT = void 0;
var dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.PORT = process.env.PORT;
exports.ENV = process.env.ENV;
exports.POSTGRES_HOST = process.env.POSTGRES_HOST;
exports.POSTGRES_PORT = process.env.POSTGRES_PORT;
exports.POSTGRES_DB_DEV = process.env.POSTGRES_DB_DEV;
exports.POSTGRES_DB_TEST = process.env.POSTGRES_DB_TEST;
exports.POSTGRES_USER = process.env.POSTGRES_USER;
exports.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
exports.BCRYPT_PASSWORD = process.env.BCRYPT_PASSWORD;
exports.SALT_ROUNDS = process.env.SALT_ROUNDS;
exports.JWT_TOKEN = process.env.JWT_TOKEN_SECRET;
