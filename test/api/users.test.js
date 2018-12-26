/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');

const app = require('../../app');
const { initDatabase, cleanDatabase } = require('../.testingHelpers/dbTestUtil');

const apiPath = '/api/v1/users';

describe('User routes ', () => {
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

    expect(res.body.response.user).toMatchObject(body);
    expect(typeof res.body.response.user.id).toBe('number');
  });

  test('it should return user', async () => {
    const id = 4;

    const res = await request(app)
      .get(`${apiPath}/${id}`)
      .expect(httpStatus.OK);

    const compareObj = {
      firstName: 'Tony',
      lastName: 'Colt',
      email: 'asdgfg@test.ai',
      password: 'asd123.#@!',
      role: 'police'
    };

    expect(res.body.response.user).toMatchObject(compareObj);
    expect(res.body.response.user.id).toBe(id);
  });

  test('it should update user', async () => {
    body = {
      firstName: 'tester',
      lastName: 'tested',
      email: 'test@tset.ai',
      password: 'qwe123.!#',
      role: 'police'
    };

    const id = 4;

    const res = await request(app)
      .put(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK);

    expect(res.body.response.user).toMatchObject(body);
    expect(res.body.response.user.id).toBe(id);
  });

  test('it should delete user', async () => {
    const id = 1;

    const res = await request(app)
      .delete(`${apiPath}/${id}`)
      .send(body)
      .expect(httpStatus.OK);

    expect(res.body.response).toEqual({});
  });
});

