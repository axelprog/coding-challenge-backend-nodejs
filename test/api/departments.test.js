/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../app');

const apiPath = '/api/v1/departments';

describe('Department routes ', () => {
  let body;

  beforeAll(async () => {
    body = {};
  });

  describe('validation tests', () => {
    test('it should  not validate required values for create department', () => {
      body = {};

      return request(app)
        .post(`${apiPath}/`)
        .send(body)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.response.errors.length).toBe(1);
          expect(res.body.response.errors[0].errorAttributes.field[0]).toBe('name');
        });
    });

    test('it should not validate filled values for create department', () => {
      body = {
        name: 424242,
        description: 42.24
      };

      return request(app)
        .post(`${apiPath}/`)
        .send(body)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.response.errors.length).toBe(2);
          expect(res.body.response.errors[0].errorAttributes.field[0]).toBe('name');
          expect(res.body.response.errors[0].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[1].errorAttributes.field[0]).toBe('description');
          expect(res.body.response.errors[1].errorAttributes.types[0]).toBe('string.base');
        });
    });

    test('it should not validate id for get department', () => {
      const id = 'qwe';
      return request(app)
        .get(`${apiPath}/${id}`)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.response.errors.length).toBe(1);
          expect(res.body.response.errors[0].errorAttributes.field[0]).toBe('id');
          expect(res.body.response.errors[0].errorAttributes.types[0]).toBe('number.base');
        });
    });

    test('it should validate empty data for update department', () => {
      body = {};

      const id = '123';

      return request(app)
        .put(`${apiPath}/${id}`)
        .send(body)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.response.errors).toEqual(undefined);
        });
    });

    test('it should not validate data for update department', () => {
      body = {
        name: 424242,
        description: 42.24
      };

      const id = 'qweqwe';

      return request(app)
        .put(`${apiPath}/${id}`)
        .send(body)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.response.errors.length).toBe(3);
          expect(res.body.response.errors[0].errorAttributes.field[0]).toBe('name');
          expect(res.body.response.errors[0].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[1].errorAttributes.field[0]).toBe('description');
          expect(res.body.response.errors[1].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[2].errorAttributes.field[0]).toBe('id');
          expect(res.body.response.errors[2].errorAttributes.types[0]).toBe('number.base');
        });
    });

    test('it should not validate delete department', () => {
      const id = 'qwe123';

      return request(app)
        .delete(`${apiPath}/${id}`)
        .send(body)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.response.errors.length).toBe(1);
          expect(res.body.response.errors[0].errorAttributes.field[0]).toBe('id');
          expect(res.body.response.errors[0].errorAttributes.types[0]).toBe('number.base');
        });
    });
  });

  describe('integration tests', () => {
    test('it should create department', () => {
      body = {
        name: 'NYCPolice',
        description: 'base police department'
      };

      return request(app)
        .post(`${apiPath}/`)
        .send(body)
        .expect(httpStatus.OK)
        .then((res) => {
          // TODO: fill after done DB integration
        });
    });

    test('it should return department', () => {
      const id = '123';

      return request(app)
        .get(`${apiPath}/${id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          // TODO: fill after done DB integration
        });
    });

    test('it should update department', () => {
      body = {
        name: 'NYCPolice',
        description: 'base police department'
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

    test('it should delete department', () => {
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
});

