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


  test('it should create department', () => {
    body = {
      name: 'NYCPolice',
      description: 'base police department'
    };

    return request(app)
      .post(`${apiPath}/`)
      .send(body)
      .expect(httpStatus.CREATED)
      .then((res) => {
        expect(res.body.response.department).toMatchObject(body);
        expect(typeof res.body.response.department.id).toBe('number');
      });
  });

  test('it should return department', () => {
    const id = 1;

    return request(app)
      .get(`${apiPath}/${id}`)
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body.response.department).toMatchObject({ name: 'mock department 1', description: 'test department 1 mock data' });
        expect(res.body.response.department.id).toBe(1);
      });
  });

  test('it should update department', () => {
    body = {
      name: 'NYCPolice',
      description: 'base police department'
    };

    const id = 1;

    return request(app)
      .put(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body.response.department).toMatchObject(body);
        expect(res.body.response.department.id).toBe(id);
      });
  });

  test('it should delete department', () => {
    const id = 1;

    return request(app)
      .delete(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body.response).toEqual({});
      });
  });
});

