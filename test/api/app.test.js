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

  test('it should GET /', () => {
    return request(app)
      .get('/')
      .send(body)
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body).toHaveProperty('responseCode');
        expect(res.body).toHaveProperty('responseMessage');
        expect(res.body.responseCode).toBe(httpStatus.OK);
        expect(res.body.responseMessage).toEqual(expect.any(String));
      });
  });

  test('it should get /api-docs', () => {
    return request(app)
      .get('/api-docs/')
      .send(body)
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.text).toEqual(expect.stringContaining('<html>'));
      });
  });

  test('it should handle 404 error', () => {
    return request(app)
      .post('/')
      .send(body)
      .expect(httpStatus.NOT_FOUND)
      .then((res) => {
        expect(res.body).toHaveProperty('responseCode');
        expect(res.body).toHaveProperty('responseMessage');
        expect(res.body.responseCode).toBe(httpStatus.NOT_FOUND);
        expect(res.body.responseMessage).toEqual(expect.any(String));
      });
  });
});

