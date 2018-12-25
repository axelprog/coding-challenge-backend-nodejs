/* eslint-disable arrow-body-style */
const { mockValidation, stubReq } = require('../../.testingHelpers/validatorTestUtil');
const validationRules = require('../../../validation/users');

describe('User validators ', () => {
  let req;

  beforeEach(async () => {
    req = stubReq();
  });

  describe('correct validation', () => {
    test('it should validate create user', () => {
      req.body = {
        firstName: 'John',
        lastName: 'Smith',
        email: 'test@test.ai',
        password: 'qwe123.#@!',
        role: 'admin'
      };

      mockValidation(validationRules.userCreate, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate get user', () => {
      req.params.id = 123;

      mockValidation(validationRules.userGet, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate filled data update user', () => {
      req.params.id = 123;
      req.body = {
        firstName: 'John',
        lastName: 'Smith',
        email: 'test@test.ai',
        password: 'qwe123.#@!',
        role: 'admin'
      };

      mockValidation(validationRules.userUpdate, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate empty data for update user', () => {
      req.params.id = 123;
      mockValidation(validationRules.userUpdate, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate delete user', () => {
      req.params.id = 123;

      mockValidation(validationRules.userDelete, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    describe('check validation values for roles for create user', () => {
      beforeEach(async () => {
        req.body = {
          email: 'test@tset.ai',
          password: 'qwe4224'
        };
      });
      test('it should validate role "admin"', () => {
        req.body.role = 'admin';

        mockValidation(validationRules.userCreate, req, (data) => {
          expect(data).toEqual(undefined);
        });
      });

      test('it should validate role "manager"', () => {
        req.body.role = 'manager';

        mockValidation(validationRules.userCreate, req, (data) => {
          expect(data).toEqual(undefined);
        });
      });

      test('it should validate role "police"', () => {
        req.body.role = 'police';

        mockValidation(validationRules.userCreate, req, (data) => {
          expect(data).toEqual(undefined);
        });
      });

      test('it should validate role "user"', () => {
        req.body.role = 'user';

        mockValidation(validationRules.userCreate, req, (data) => {
          expect(data).toEqual(undefined);
        });
      });

      test('it should invalidate role "officer"', () => {
        req.body.role = 'officer';

        mockValidation(validationRules.userCreate, req, (data) => {
          expect(data.errors.length).toBe(1);
          expect(data.errors[0].field[0]).toBe('role');
          expect(data.errors[0].types[0]).toBe('any.allowOnly');
        });
      });
    });

    describe('check validation values for roles for edit user', () => {
      beforeEach(async () => {
        req.body = {
          email: 'test@tset.ai',
          password: 'qwe4224'
        };
        req.params.id = 123;
      });

      test('it should validate role "admin"', () => {
        req.body.role = 'admin';

        mockValidation(validationRules.userUpdate, req, (data) => {
          expect(data).toEqual(undefined);
        });
      });

      test('it should validate role "manager"', () => {
        req.body.role = 'manager';

        mockValidation(validationRules.userUpdate, req, (data) => {
          expect(data).toEqual(undefined);
        });
      });

      test('it should validate role "police"', () => {
        req.body.role = 'police';

        mockValidation(validationRules.userUpdate, req, (data) => {
          expect(data).toEqual(undefined);
        });
      });

      test('it should validate role "user"', () => {
        req.body.role = 'user';

        mockValidation(validationRules.userUpdate, req, (data) => {
          expect(data).toEqual(undefined);
        });
      });

      test('it should invalidate role "officer"', () => {
        req.body.role = 'officer';

        mockValidation(validationRules.userUpdate, req, (data) => {
          expect(data.errors.length).toBe(1);
          expect(data.errors[0].field[0]).toBe('role');
          expect(data.errors[0].types[0]).toBe('any.allowOnly');
        });
      });
    });
  });

  describe('incorrect validation', () => {
    test('it should not validate required values for create user', () => {
      mockValidation(validationRules.userCreate, req, (data) => {
        expect(data.errors.length).toBe(3);
        expect(data.errors[0].field[0]).toBe('email');
        expect(data.errors[1].field[0]).toBe('password');
        expect(data.errors[2].field[0]).toBe('role');
      });
    });

    test('it should not validate filled values for create user', () => {
      req.body = {
        firstName: 424242,
        lastName: 42.24,
        email: 'test_tset',
        password: 4224,
        role: 'officer'
      };

      mockValidation(validationRules.userCreate, req, (data) => {
        expect(data.errors.length).toBe(5);
        expect(data.errors[0].field[0]).toBe('firstName');
        expect(data.errors[0].types[0]).toBe('string.base');
        expect(data.errors[1].field[0]).toBe('lastName');
        expect(data.errors[1].types[0]).toBe('string.base');
        expect(data.errors[2].field[0]).toBe('email');
        expect(data.errors[2].types[0]).toBe('string.email');
        expect(data.errors[3].field[0]).toBe('password');
        expect(data.errors[3].types[0]).toBe('string.base');
        expect(data.errors[4].field[0]).toBe('role');
        expect(data.errors[4].types[0]).toBe('any.allowOnly');
      });
    });

    test('it should not validate id for get user', () => {
      req.params.id = 'qwe';

      mockValidation(validationRules.userGet, req, (data) => {
        expect(data.errors.length).toBe(1);
        expect(data.errors[0].field[0]).toBe('id');
        expect(data.errors[0].types[0]).toBe('number.base');
      });
    });

    test('it should not validate data for update user', () => {
      req.body = {
        firstName: 424242,
        lastName: 42.24,
        email: 'test_tset',
        password: 4224,
        role: 'officer'
      };

      req.params.id = 'qweqwe';

      mockValidation(validationRules.userUpdate, req, (data) => {
        expect(data.errors.length).toBe(6);
        expect(data.errors[0].field[0]).toBe('firstName');
        expect(data.errors[0].types[0]).toBe('string.base');
        expect(data.errors[1].field[0]).toBe('lastName');
        expect(data.errors[1].types[0]).toBe('string.base');
        expect(data.errors[2].field[0]).toBe('email');
        expect(data.errors[2].types[0]).toBe('string.email');
        expect(data.errors[3].field[0]).toBe('password');
        expect(data.errors[3].types[0]).toBe('string.base');
        expect(data.errors[4].field[0]).toBe('role');
        expect(data.errors[4].types[0]).toBe('any.allowOnly');
        expect(data.errors[5].field[0]).toBe('id');
        expect(data.errors[5].types[0]).toBe('number.base');
      });
    });

    test('it should not validate delete user', () => {
      req.params.id = 'qwe123';
      mockValidation(validationRules.userDelete, req, (data) => {
        expect(data.errors.length).toBe(1);
        expect(data.errors[0].field[0]).toBe('id');
        expect(data.errors[0].types[0]).toBe('number.base');
      });
    });
  });
});

