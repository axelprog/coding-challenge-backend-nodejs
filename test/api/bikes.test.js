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

  describe('validation tests', () => {
    test('it should  not validate required values for create bike', () => {
      body = {};

      return request(app)
        .post(`${apiPath}/`)
        .send(body)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.response.errors.length).toBe(4);
          expect(res.body.response.errors[0].errorAttributes.field[0]).toBe('license');
          expect(res.body.response.errors[1].errorAttributes.field[0]).toBe('color');
          expect(res.body.response.errors[2].errorAttributes.field[0]).toBe('type');
          expect(res.body.response.errors[3].errorAttributes.field[0]).toBe('stealDate');
        });
    });

    test('it should not validate filled values for create bike', () => {
      body = {
        license: 424242,
        color: 42.24,
        type: true,
        stealDate: 'test',
        thiefDescription: 424242,
        found: 'test string',
      };

      return request(app)
        .post(`${apiPath}/`)
        .send(body)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.response.errors.length).toBe(6);
          expect(res.body.response.errors[0].errorAttributes.field[0]).toBe('license');
          expect(res.body.response.errors[0].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[1].errorAttributes.field[0]).toBe('color');
          expect(res.body.response.errors[1].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[2].errorAttributes.field[0]).toBe('type');
          expect(res.body.response.errors[2].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[3].errorAttributes.field[0]).toBe('stealDate');
          expect(res.body.response.errors[3].errorAttributes.types[0]).toBe('date.base');
          expect(res.body.response.errors[4].errorAttributes.field[0]).toBe('thiefDescription');
          expect(res.body.response.errors[4].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[5].errorAttributes.field[0]).toBe('found');
          expect(res.body.response.errors[5].errorAttributes.types[0]).toBe('boolean.base');
        });
    });

    test('it should not validate id for get bike', () => {
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

    test('it should validate empty data for update bike', () => {
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

    test('it should not validate data for update bike', () => {
      body = {
        license: 424242,
        color: 42.24,
        type: true,
        stealDate: 'test',
        thiefDescription: 424242,
        found: 'test string',
      };

      const id = 'qweqwe';

      return request(app)
        .put(`${apiPath}/${id}`)
        .send(body)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.response.errors.length).toBe(7);
          expect(res.body.response.errors[0].errorAttributes.field[0]).toBe('license');
          expect(res.body.response.errors[0].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[1].errorAttributes.field[0]).toBe('color');
          expect(res.body.response.errors[1].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[2].errorAttributes.field[0]).toBe('type');
          expect(res.body.response.errors[2].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[3].errorAttributes.field[0]).toBe('stealDate');
          expect(res.body.response.errors[3].errorAttributes.types[0]).toBe('date.base');
          expect(res.body.response.errors[4].errorAttributes.field[0]).toBe('thiefDescription');
          expect(res.body.response.errors[4].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[5].errorAttributes.field[0]).toBe('found');
          expect(res.body.response.errors[5].errorAttributes.types[0]).toBe('boolean.base');
          expect(res.body.response.errors[6].errorAttributes.field[0]).toBe('id');
          expect(res.body.response.errors[6].errorAttributes.types[0]).toBe('number.base');
        });
    });

    test('it should not validate delete bike', () => {
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
        .expect(httpStatus.OK)
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
});

