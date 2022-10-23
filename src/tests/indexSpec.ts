import app from '../server/index';
import supertest from 'supertest';

// Simple test
// it('expext mult(5) to equal 25', () => {
//   expect(mult5(5)).toEqual(25);
// });

// API Endpoint test
const req = supertest(app);

// === async/await Endpoint Test === //
describe('1. Test endpoint response', () => {
  // Testing Suit
  it('Gets the image endpoint', async () => {
    const res = await req.get('/api/image');
    expect(res.status).toBe(200);
  });
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
