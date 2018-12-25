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

  test('it should create bike', async () => {
    body = {
      license: 'ask294.sdf',
      color: 'yellow',
      type: 'star',
      stealDate: '2018-11-22',
      thiefDescription: 'old man',
      found: false
    };

    const res = await request(app)
      .post(`${apiPath}/`)
      .send(body)
      .expect(httpStatus.CREATED);

    // TODO: fill after done DB integration
  });

  test('it should return bike', async () => {
    const id = '123';

    const res = await request(app)
      .get(`${apiPath}/${id}`)
      .expect(httpStatus.OK);

    // TODO: fill after done DB integration
  });

  test('it should update bike', async () => {
    body = {
      license: 'ask294.sdf',
      color: 'yellow',
      type: 'star',
      stealDate: '2018-11-22',
      thiefDescription: 'old man',
      found: false
    };

    const id = '123';

    const res = await request(app)
      .put(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK);

    // TODO: fill after done DB integration
  });

  test('it should delete bike', async () => {
    const id = '123';

    const res = await request(app)
      .delete(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK);

    // TODO: fill after done DB integration
  });
});

