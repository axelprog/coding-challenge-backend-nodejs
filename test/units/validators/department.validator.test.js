/* eslint-disable arrow-body-style */
const { mockValidation, stubReq } = require('../../.testingHelpers/validatorTestUtil');
const validationRules = require('../../../validation/departments');

describe('Department validators ', () => {
  let req;

  beforeEach(async () => {
    req = stubReq();
  });

  describe('correct validation', () => {
    test('it should validate create department', () => {
      req.body = {
        name: 'test',
        description: 'test description'
      };

      mockValidation(validationRules.departmentCreate, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate get department', () => {
      req.params.id = 123;

      mockValidation(validationRules.departmentGet, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate filled data update department', () => {
      req.params.id = 123;
      req.body = {
        name: 'test',
        description: 'test description'
      };

      mockValidation(validationRules.departmentUpdate, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate empty data for update department', () => {
      req.params.id = 123;
      mockValidation(validationRules.departmentUpdate, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate delete department', () => {
      req.params.id = 123;

      mockValidation(validationRules.departmentDelete, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate get list of department', () => {
      req.query = {
        limit: 10,
        page: 1
      };

      mockValidation(validationRules.departmentGetList, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });
  });

  describe('incorrect validation', () => {
    test('it should  not validate required values for create department', () => {
      mockValidation(validationRules.departmentCreate, req, (data) => {
        expect(data.errors.length).toBe(1);
        expect(data.errors[0].field[0]).toBe('name');
      });
    });

    test('it should not validate filled values for create department', () => {
      req.body = {
        name: 424242,
        description: 42.24
      };

      mockValidation(validationRules.departmentCreate, req, (data) => {
        expect(data.errors.length).toBe(2);
        expect(data.errors[0].field[0]).toBe('name');
        expect(data.errors[0].types[0]).toBe('string.base');
        expect(data.errors[1].field[0]).toBe('description');
        expect(data.errors[1].types[0]).toBe('string.base');
      });
    });

    test('it should not validate id for get department', () => {
      req.params.id = 'qwe';
      mockValidation(validationRules.departmentGet, req, (data) => {
        expect(data.errors.length).toBe(1);
        expect(data.errors[0].field[0]).toBe('id');
        expect(data.errors[0].types[0]).toBe('number.base');
      });
    });

    test('it should not validate data for update department', () => {
      req.body = {
        name: 424242,
        description: 42.24
      };

      req.params.id = 'qweqwe';

      mockValidation(validationRules.departmentUpdate, req, (data) => {
        expect(data.errors.length).toBe(3);
        expect(data.errors[0].field[0]).toBe('name');
        expect(data.errors[0].types[0]).toBe('string.base');
        expect(data.errors[1].field[0]).toBe('description');
        expect(data.errors[1].types[0]).toBe('string.base');
        expect(data.errors[2].field[0]).toBe('id');
        expect(data.errors[2].types[0]).toBe('number.base');
      });
    });

    test('it should not validate delete department', () => {
      req.params.id = 'qwe123';

      mockValidation(validationRules.departmentDelete, req, (data) => {
        expect(data.errors.length).toBe(1);
        expect(data.errors[0].field[0]).toBe('id');
        expect(data.errors[0].types[0]).toBe('number.base');
      });
    });

    test('it should not validate get list of departments without query', () => {
      mockValidation(validationRules.departmentGetList, req, (data) => {
        expect(data.errors.length).toBe(2);
        expect(data.errors[0].field[0]).toBe('limit');
        expect(data.errors[0].types[0]).toBe('any.required');
        expect(data.errors[1].field[0]).toBe('page');
        expect(data.errors[1].types[0]).toBe('any.required');
      });
    });

    test('it should not validate get list of departments with string query params', () => {
      req.query = {
        limit: 'test',
        page: 'sdf'
      };

      mockValidation(validationRules.departmentGetList, req, (data) => {
        expect(data.errors.length).toBe(2);
        expect(data.errors[0].field[0]).toBe('limit');
        expect(data.errors[0].types[0]).toBe('number.base');
        expect(data.errors[1].field[0]).toBe('page');
        expect(data.errors[1].types[0]).toBe('number.base');
      });
    });

    test('it should not validate get list of departments with negative query params', () => {
      req.query = {
        limit: -10,
        page: -1
      };

      mockValidation(validationRules.departmentGetList, req, (data) => {
        expect(data.errors.length).toBe(2);
        expect(data.errors[0].field[0]).toBe('limit');
        expect(data.errors[0].types[0]).toBe('number.min');
        expect(data.errors[1].field[0]).toBe('page');
        expect(data.errors[1].types[0]).toBe('number.min');
      });
    });
  });
});

