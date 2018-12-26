/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');

const app = require('../../app');
const { initDatabase, cleanDatabase } = require('../.testingHelpers/dbTestUtil');

const apiPath = '/api/v1/departments';

describe('Department routes ', () => {
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

  test('it should return list of departments', async () => {
    const res = await request(app)
      .get(`${apiPath}/list?limit=10&page=1`)
      .expect(httpStatus.OK);

    expect(res.body.response.departments.length).toBe(3);
  });

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
    const id = 3;

    const res = await request(app)
      .get(`${apiPath}/${id}`)
      .expect(httpStatus.OK);

    expect(res.body.response.department).toMatchObject({ name: 'mock department 3', description: 'test department 3 mock data' });
    expect(res.body.response.department.id).toBe(3);
  });

  test('it should update department', async () => {
    body = {
      name: 'NYCPolice',
      description: 'base police department'
    };

    const id = 2;

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

