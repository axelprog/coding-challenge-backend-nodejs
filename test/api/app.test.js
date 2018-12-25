/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../app');

/* Test the /GET route */
describe('app index route', () => {
  let body;

  beforeAll(async () => {
    body = {};
  });

  test('it should GET /', async () => {
    const res = await request(app)
      .get('/')
      .expect(httpStatus.OK);

    expect(res.body).toHaveProperty('responseCode');
    expect(res.body).toHaveProperty('responseMessage');
    expect(res.body.responseCode).toBe(httpStatus.OK);
    expect(res.body.responseMessage).toEqual(expect.any(String));
  });

  test('it should get /api-docs', async () => {
    const res = await request(app)
      .get('/api-docs/')
      .expect(httpStatus.OK);

    expect(res.text).toEqual(expect.stringContaining('<html>'));
  });

  test('it should handle 404 error', async () => {
    const res = await request(app)
      .post('/')
      .expect(httpStatus.NOT_FOUND);

    expect(res.body).toHaveProperty('responseCode');
    expect(res.body).toHaveProperty('responseMessage');
    expect(res.body.responseCode).toBe(httpStatus.NOT_FOUND);
    expect(res.body.responseMessage).toEqual(expect.any(String));
  });
});

