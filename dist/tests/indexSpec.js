"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("../client"));
// Simple test
it('expext mult(5) to equal 25', function () {
    expect((0, client_1.default)(5)).toEqual(25);
});
// === async/await test === //
// it('expect asyncFun() result to equal value', async () => {
//   const result = await asyncFun();
//   expect(result).toEqual(value);
// });
// === Promise test === //
// it('expect asyncFun() result to equal value', () => {
//    return asyncFun().then( result => {
//       expect(result).toEqual(value);
//    })
// });
// === Promise Resolution and Rejection test === //
// it('expect asyncFun() result to resolve', async () => {
//   await asyncFun().[toBeResolved/toBeRejected]();
// });
