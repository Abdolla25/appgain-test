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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_handlers_1 = require("../../handlers/auth.handlers");
var orderHandlers = __importStar(require("../../handlers/orders.handlers"));
var user = express_1.default.Router();
user
    .route('/')
    .get(orderHandlers.getAll)
    .post(auth_handlers_1.validateJWT, orderHandlers.create)
    .put(auth_handlers_1.validateJWT, orderHandlers.updateOne);
user.route('/:id').get(orderHandlers.getOne).delete(auth_handlers_1.validateJWT, orderHandlers.deleteOne);
user.route('/u/:id').get(auth_handlers_1.validateJWT, orderHandlers.getOneUser);
user.route('/uc/:id').get(auth_handlers_1.validateJWT, orderHandlers.getOneUserComplete);
exports.default = user;
