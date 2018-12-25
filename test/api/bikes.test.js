/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../app');

const apiPath = '/api/v1/bikes';

describe('Bike routes ', () => {
  let body;

  beforeAll(async () => {
    body = {};
  });

  test('it should create bike', () => {
    body = {
      license: 'ask294.sdf',
      color: 'yellow',
      type: 'star',
      stealDate: '2018-11-22',
      thiefDescription: 'old man',
      found: false
    };

    return request(app)
      .post(`${apiPath}/`)
      .send(body)
      .expect(httpStatus.CREATED)
      .then((res) => {
        // TODO: fill after done DB integration
      });
  });

  test('it should return bike', () => {
    const id = '123';

    return request(app)
      .get(`${apiPath}/${id}`)
      .expect(httpStatus.OK)
      .then((res) => {
        // TODO: fill after done DB integration
      });
  });

  test('it should update bike', () => {
    body = {
      license: 'ask294.sdf',
      color: 'yellow',
      type: 'star',
      stealDate: '2018-11-22',
      thiefDescription: 'old man',
      found: false
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

  test('it should delete bike', () => {
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

