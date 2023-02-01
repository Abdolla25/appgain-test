"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var link_1 = __importDefault(require("./api/link"));
var api = express_1.default.Router();
api.get('/', function (_req, res) {
    res.send({ message: 'index api route' });
});
api.use('/shortlinks', link_1.default);
exports.default = api;
