"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var order_1 = __importDefault(require("./api/order"));
var product_1 = __importDefault(require("./api/product"));
var user_1 = __importDefault(require("./api/user"));
var api = express_1.default.Router();
api.get('/', function (_req, res) {
    res.json({ message: 'This is index api route' });
});
api.use('/user', user_1.default);
api.use('/product', product_1.default);
api.use('/order', order_1.default);
exports.default = api;
