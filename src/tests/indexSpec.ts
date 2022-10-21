import mult5 from '../client';

// Simple test
it('expext mult(5) to equal 25', () => {
  expect(mult5(5)).toEqual(25);
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