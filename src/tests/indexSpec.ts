import app from '../server/index';
import supertest from 'supertest';
import resizeImg from '../functions';

// API Endpoint test
const req = supertest(app);

// === async/await Endpoint Test === //
describe('1. Test endpoint response', () => {
  // Testing Suit
  it('Gets the image endpoint', async (): Promise<void> => {
    const res = await req.get('/api/image');
    expect(res.status).toBe(200);
  });

  it('Gets /api/image?imgname=im123&width=-200&height=200', async (): Promise<void> => {
    //Invalid args
    const res = await req.get('/api/image?imgname=im123&width=-200&height=200');
    expect(res.status).toBe(200);
  });
});

describe('2. Image transform function should resolve', () => {
  it('Resolves succesfully with the right filename', async (): Promise<void> => {
    await expectAsync(resizeImg('im1', 200, 200)).toBeResolved();
  });
});
