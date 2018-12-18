/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../app');

describe('POST /api/v1/bikes', () => {
  let body;

  beforeAll(async () => {
    body = {};
  });

  afterAll(async () => {});

  beforeEach(() => {});

  afterEach(() => {});

  test('should integrate api /bikes', () => {
    return request(app)
      .post('/api/v1/bikes')
      .send(body)
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body).toHaveProperty('responseCode');
        expect(res.body).toHaveProperty('responseMessage');
        expect(res.body.responseCode).toBe(httpStatus.OK);
        expect(res.body.responseMessage).toEqual(expect.any(String));
      });
  });
});
