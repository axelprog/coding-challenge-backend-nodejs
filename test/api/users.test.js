/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');

const app = require('../../app');

const apiPath = '/api/v1/users';

describe('User routes ', () => {
  let body;

  beforeEach(async () => {
    body = {};
  });

  test('it should create user', async () => {
    body = {
      firstName: 'tester',
      lastName: 'tested',
      email: 'test@tset.ai',
      password: 'qwe123.!#',
      role: 'police'
    };

    const res = await request(app)
      .post(`${apiPath}/`)
      .send(body)
      .expect(httpStatus.CREATED);

    // TODO: fill after done DB integration
  });

  test('it should return user', async () => {
    const id = '123';

    const res = await request(app)
      .get(`${apiPath}/${id}`)
      .expect(httpStatus.OK);

    // TODO: fill after done DB integration
  });

  test('it should update user', async () => {
    body = {
      firstName: 'tester',
      lastName: 'tested',
      email: 'test@tset.ai',
      password: 'qwe123.!#',
      role: 'police'
    };

    const id = '123';

    const res = await request(app)
      .put(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK);

    // TODO: fill after done DB integration
  });

  test('it should delete user', async () => {
    const id = '123';

    const res = await request(app)
      .delete(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK);

    // TODO: fill after done DB integration
  });
});

