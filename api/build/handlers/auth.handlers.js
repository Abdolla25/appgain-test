"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../config");
var validateJWT = function (req, _res, next) {
    try {
        var getAuthHeader = req.get('Authorization');
        var verify = jsonwebtoken_1.default.verify(getAuthHeader.split(' ')[1], config_1.JWT_TOKEN);
        if (verify) {
            next();
        }
        else {
            throw new Error('Error on validate request!');
        }
    }
    catch (error) {
        throw new Error('Error on validate request!');
    }
};
exports.validateJWT = validateJWT;
