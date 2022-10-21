"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var PORT = 4000;
app.get('/api', function (req, res) {
    res.send('Hello, world!');
});
app.listen(PORT, function () {
    console.log("Running on localhost at ".concat(PORT));
});
exports.default = app;
