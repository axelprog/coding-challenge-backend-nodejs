/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');

const app = require('../../app');
const { initDatabase, cleanDatabase } = require('../.testingHelpers/dbTestUtil');

const apiPath = '/api/v1/departments';

describe('Department routes ', () => {
  let body;

  beforeAll(async () => {
    initDatabase();
  });

  beforeEach(() => {
    body = {};
  });

  afterAll(() => cleanDatabase());


  test('it should create department', async () => {
    body = {
      name: 'NYCPolice',
      description: 'base police department'
    };

    const res = await request(app)
      .post(`${apiPath}/`)
      .send(body)
      .expect(httpStatus.CREATED);

    expect(res.body.response.department).toMatchObject(body);
    expect(typeof res.body.response.department.id).toBe('number');
  });

  test('it should return department', async () => {
    const id = 1;

    const res = await request(app)
      .get(`${apiPath}/${id}`)
      .expect(httpStatus.OK);

    expect(res.body.response.department).toMatchObject({ name: 'mock department 1', description: 'test department 1 mock data' });
    expect(res.body.response.department.id).toBe(1);
  });

  test('it should update department', async () => {
    body = {
      name: 'NYCPolice',
      description: 'base police department'
    };

    const id = 1;

    const res = await request(app)
      .put(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK);

    expect(res.body.response.department).toMatchObject(body);
    expect(res.body.response.department.id).toBe(id);
  });

  test('it should delete department', async () => {
    const id = 1;

    const res = await request(app)
      .delete(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK);

    expect(res.body.response).toEqual({});
  });
});

