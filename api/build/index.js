"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var config_1 = require("./config");
var routes_1 = __importDefault(require("./routes"));
var port = config_1.PORT || 3000;
var app = (0, express_1.default)();
// Logging middleware
app.use((0, morgan_1.default)('short'));
// JSON parsing middleware
app.use(express_1.default.json());
// Security profile middleware
app.use((0, helmet_1.default)());
// Index Route
app.get('/', function (req, res) {
    res.json({ message: 'Hello World 🌍' });
});
// API Routes middleware
app.use('/api', routes_1.default);
app.listen(port, function () {
    console.log("Server is starting at port:".concat(port));
});
exports.default = app;
