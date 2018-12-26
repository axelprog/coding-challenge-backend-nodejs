/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../app');

const apiPath = '/api/v1/bikes';
const { initDatabase, cleanDatabase } = require('../.testingHelpers/dbTestUtil');

describe('Bike routes ', () => {
  let body;

  beforeAll(async () => {
    await initDatabase();
  });

  beforeEach(() => {
    body = {};
  });

  afterAll(async () => {
    await cleanDatabase();
  });

  test('it should return list of bikes', async () => {
    const res = await request(app)
      .get(`${apiPath}/list?limit=10&page=1`)
      .expect(httpStatus.OK);

    expect(res.body.response.bikes.length).toBe(4);
  });

  test('it should create bike', async () => {
    body = {
      license: 'ask294.sdf',
      color: 'yellow',
      type: 'star',
      stealDate: '2018-11-22',
      thiefDescription: 'old man',
      found: false,
      owner: 4
    };

    const res = await request(app)
      .post(`${apiPath}/`)
      .send(body)
      .expect(httpStatus.CREATED);

    delete body.stealDate;

    expect(res.body.response.bike).toMatchObject(body);
    expect(typeof res.body.response.bike.id).toBe('number');
    expect(res.body.response.bike.stealDate).toBe('2018-11-22T00:00:00.000Z');
  });

  test('it should return bike', async () => {
    const id = 3;

    const res = await request(app)
      .get(`${apiPath}/${id}`)
      .expect(httpStatus.OK);

    const compareObj = {
      license: 'zxc23.sfgd',
      color: 'blue',
      type: 'hammer',
      stealDate: '2015-08-07T00:00:00.000Z',
      thiefDescription: 'woman with green hair',
      found: false
    };

    expect(res.body.response.bike).toMatchObject(compareObj);
    expect(res.body.response.bike.id).toBe(id);
  });

  test('it should update bike', async () => {
    body = {
      license: 'ask294.sdf',
      color: 'yellow',
      type: 'star',
      stealDate: '2018-11-22',
      thiefDescription: 'old man',
      found: false,
      owner: 2,
      handle: 1
    };

    const id = 1;

    const res = await request(app)
      .put(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK);

    delete body.stealDate;

    expect(res.body.response.bike).toMatchObject(body);
    expect(res.body.response.bike.id).toBe(id);
    expect(res.body.response.bike.stealDate).toBe('2018-11-22T00:00:00.000Z');
  });

  test('it should delete bike', async () => {
    const id = '2';

    const res = await request(app)
      .delete(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK);

    expect(res.body.response).toEqual({});
  });
});

