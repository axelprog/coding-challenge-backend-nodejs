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

  test('it should create user', () => {
    body = {
      firstName: 'tester',
      lastName: 'tested',
      email: 'test@tset.ai',
      password: 'qwe123.!#',
      role: 'police'
    };

    return request(app)
      .post(`${apiPath}/`)
      .send(body)
      .expect(httpStatus.CREATED)
      .then((res) => {
        // TODO: fill after done DB integration
      });
  });

  test('it should return user', () => {
    const id = '123';

    return request(app)
      .get(`${apiPath}/${id}`)
      .expect(httpStatus.OK)
      .then((res) => {
        // TODO: fill after done DB integration
      });
  });

  test('it should update user', () => {
    body = {
      firstName: 'tester',
      lastName: 'tested',
      email: 'test@tset.ai',
      password: 'qwe123.!#',
      role: 'police'
    };

    const id = '123';

    return request(app)
      .put(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK)
      .then((res) => {
        // TODO: fill after done DB integration
      });
  });

  test('it should delete user', () => {
    const id = '123';

    return request(app)
      .delete(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK)
      .then((res) => {
        // TODO: fill after done DB integration
      });
  });
});

