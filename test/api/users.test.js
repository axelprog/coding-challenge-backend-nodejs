/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');

const app = require('../../app');

const apiPath = '/api/v1/users';

describe('User routes ', () => {
  let body;

  beforeAll(async () => {
    body = {};
  });

  describe('validation tests', () => {
    test('it should not validate required values for create user', () => {
      body = {};

      return request(app)
        .post(`${apiPath}/`)
        .send(body)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.response.errors.length).toBe(3);
          expect(res.body.response.errors[0].errorAttributes.field[0]).toBe('email');
          expect(res.body.response.errors[1].errorAttributes.field[0]).toBe('password');
          expect(res.body.response.errors[2].errorAttributes.field[0]).toBe('role');
        });
    });

    test('it should not validate filled values for create user', () => {
      body = {
        firstName: 424242,
        lastName: 42.24,
        email: 'test_tset',
        password: 4224,
        role: 'officer'
      };

      return request(app)
        .post(`${apiPath}/`)
        .send(body)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.response.errors.length).toBe(5);
          expect(res.body.response.errors[0].errorAttributes.field[0]).toBe('firstName');
          expect(res.body.response.errors[0].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[1].errorAttributes.field[0]).toBe('lastName');
          expect(res.body.response.errors[1].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[2].errorAttributes.field[0]).toBe('email');
          expect(res.body.response.errors[2].errorAttributes.types[0]).toBe('string.email');
          expect(res.body.response.errors[3].errorAttributes.field[0]).toBe('password');
          expect(res.body.response.errors[3].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[4].errorAttributes.field[0]).toBe('role');
          expect(res.body.response.errors[4].errorAttributes.types[0]).toBe('any.allowOnly');
        });
    });

    describe('check validation values for roles for edit user', () => {
      test('it should validate role "admin"', () => {
        body = {
          email: 'test@tset.ai',
          password: 'qwe4224',
          role: 'admin'
        };

        return request(app)
          .post(`${apiPath}`)
          .send(body)
          .expect(httpStatus.CREATED);
      });

      test('it should validate role "manager"', () => {
        body = {
          email: 'test@tset.ai',
          password: 'qwe4224',
          role: 'manager'
        };

        return request(app)
          .post(`${apiPath}`)
          .send(body)
          .expect(httpStatus.CREATED);
      });

      test('it should validate role "police"', () => {
        body = {
          email: 'test@tset.ai',
          password: 'qwe4224',
          role: 'police'
        };

        return request(app)
          .post(`${apiPath}`)
          .send(body)
          .expect(httpStatus.CREATED);
      });

      test('it should validate role "user"', () => {
        body = {
          email: 'test@tset.ai',
          password: 'qwe4224',
          role: 'user'
        };

        return request(app)
          .post(`${apiPath}`)
          .send(body)
          .expect(httpStatus.CREATED);
      });

      test('it should invalidate role "officer"', () => {
        body = {
          email: 'test@tset.ai',
          password: 'qwe4224',
          role: 'officer'
        };

        const id = 42;

        return request(app)
          .put(`${apiPath}/${id}`)
          .send(body)
          .expect(httpStatus.BAD_REQUEST);
      });
    });

    test('it should not validate id for get user', () => {
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

    test('it should validate empty data for update user', () => {
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

    test('it should not validate data for update user', () => {
      body = {
        firstName: 424242,
        lastName: 42.24,
        email: 'test_tset',
        password: 4224,
        role: 'officer'
      };

      const id = 'qweqwe';

      return request(app)
        .put(`${apiPath}/${id}`)
        .send(body)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.response.errors.length).toBe(6);
          expect(res.body.response.errors[0].errorAttributes.field[0]).toBe('firstName');
          expect(res.body.response.errors[0].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[1].errorAttributes.field[0]).toBe('lastName');
          expect(res.body.response.errors[1].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[2].errorAttributes.field[0]).toBe('email');
          expect(res.body.response.errors[2].errorAttributes.types[0]).toBe('string.email');
          expect(res.body.response.errors[3].errorAttributes.field[0]).toBe('password');
          expect(res.body.response.errors[3].errorAttributes.types[0]).toBe('string.base');
          expect(res.body.response.errors[4].errorAttributes.field[0]).toBe('role');
          expect(res.body.response.errors[4].errorAttributes.types[0]).toBe('any.allowOnly');
          expect(res.body.response.errors[5].errorAttributes.field[0]).toBe('id');
          expect(res.body.response.errors[5].errorAttributes.types[0]).toBe('number.base');
        });
    });

    describe('check validation values for roles for edit user', () => {
      test('it should validate role "admin"', () => {
        body = {
          role: 'admin'
        };

        const id = 42;

        return request(app)
          .put(`${apiPath}/${id}`)
          .send(body)
          .expect(httpStatus.OK);
      });

      test('it should validate role "manager"', () => {
        body = {
          role: 'manager'
        };

        const id = 42;

        return request(app)
          .put(`${apiPath}/${id}`)
          .send(body)
          .expect(httpStatus.OK);
      });

      test('it should validate role "police"', () => {
        body = {
          role: 'police'
        };

        const id = 42;

        return request(app)
          .put(`${apiPath}/${id}`)
          .send(body)
          .expect(httpStatus.OK);
      });

      test('it should validate role "user"', () => {
        body = {
          role: 'user'
        };

        const id = 42;

        return request(app)
          .put(`${apiPath}/${id}`)
          .send(body)
          .expect(httpStatus.OK);
      });

      test('it should invalidate role "officer"', () => {
        body = {
          role: 'officer'
        };

        const id = 42;

        return request(app)
          .put(`${apiPath}/${id}`)
          .send(body)
          .expect(httpStatus.BAD_REQUEST);
      });
    });

    test('it should not validate delete user', () => {
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
});

