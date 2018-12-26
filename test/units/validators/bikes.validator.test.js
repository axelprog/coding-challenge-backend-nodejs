/* eslint-disable arrow-body-style */
const { mockValidation, stubReq } = require('../../.testingHelpers/validatorTestUtil');
const validationRules = require('../../../validation/bikes');

describe('Bike validators ', () => {
  let req;

  beforeEach(async () => {
    req = stubReq();
  });

  describe('correct validation', () => {
    test('it should validate create bikes', () => {
      req.body = {
        license: 'qweasd.2342',
        color: 'black',
        type: 'bmw',
        stealDate: new Date(),
        thiefDescription: 'strange man',
        found: false,
        owner: 1
      };

      mockValidation(validationRules.bikeCreate, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate get bikes', () => {
      req.params.id = 123;

      mockValidation(validationRules.bikeGet, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate filled data update bikes', () => {
      req.params.id = 123;
      req.body = {
        license: 'qweasd.2342',
        color: 'black',
        type: 'bmw',
        stealDate: new Date(),
        thiefDescription: 'strange man',
        found: false,
        owner: 1,
        handle: 1
      };

      mockValidation(validationRules.bikeUpdate, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate empty data for update bikes', () => {
      req.params.id = 123;
      mockValidation(validationRules.bikeUpdate, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });

    test('it should validate delete bikes', () => {
      req.params.id = 123;

      mockValidation(validationRules.bikeDelete, req, (data) => {
        expect(data).toEqual(undefined);
      });
    });
  });

  describe('incorrect validation', () => {
    test('it should not validate required values for create bike', () => {
      mockValidation(validationRules.bikeCreate, req, (data) => {
        expect(data.errors.length).toBe(4);
        expect(data.errors[0].field[0]).toBe('license');
        expect(data.errors[1].field[0]).toBe('color');
        expect(data.errors[2].field[0]).toBe('type');
        expect(data.errors[3].field[0]).toBe('stealDate');
      });
    });

    test('it should not validate filled values for create bike', () => {
      req.body = {
        license: 424242,
        color: 42.24,
        type: true,
        stealDate: 'test',
        thiefDescription: 424242,
        found: 'test string',
        owner: 123.12,
        handle: '123'
      };

      mockValidation(validationRules.bikeCreate, req, (data) => {
        expect(data.errors.length).toBe(8);
        expect(data.errors[0].field[0]).toBe('license');
        expect(data.errors[0].types[0]).toBe('string.base');
        expect(data.errors[1].field[0]).toBe('color');
        expect(data.errors[1].types[0]).toBe('string.base');
        expect(data.errors[2].field[0]).toBe('type');
        expect(data.errors[2].types[0]).toBe('string.base');
        expect(data.errors[3].field[0]).toBe('stealDate');
        expect(data.errors[3].types[0]).toBe('date.base');
        expect(data.errors[4].field[0]).toBe('thiefDescription');
        expect(data.errors[4].types[0]).toBe('string.base');
        expect(data.errors[5].field[0]).toBe('found');
        expect(data.errors[5].types[0]).toBe('boolean.base');
        expect(data.errors[6].field[0]).toBe('owner');
        expect(data.errors[6].types[0]).toBe('number.integer');
        expect(data.errors[7].field[0]).toBe('handle');
        expect(data.errors[7].types[0]).toBe('any.unknown');
      });
    });

    test('it should not validate id for get bike', () => {
      req.params.id = 'qwe';

      mockValidation(validationRules.bikeGet, req, (data) => {
        expect(data.errors.length).toBe(1);
        expect(data.errors[0].field[0]).toBe('id');
        expect(data.errors[0].types[0]).toBe('number.base');
      });
    });

    test('it should not validate data for update bike', () => {
      req.body = {
        license: 42.4242,
        color: 4224,
        type: true,
        stealDate: 'test',
        thiefDescription: 424242,
        found: 'test string',
        owner: 12.12,
        handle: 'asdas'
      };

      req.params.id = 'qweqwe';

      mockValidation(validationRules.bikeUpdate, req, (data) => {
        expect(data.errors.length).toBe(9);
        expect(data.errors[0].field[0]).toBe('license');
        expect(data.errors[0].types[0]).toBe('string.base');
        expect(data.errors[1].field[0]).toBe('color');
        expect(data.errors[1].types[0]).toBe('string.base');
        expect(data.errors[2].field[0]).toBe('type');
        expect(data.errors[2].types[0]).toBe('string.base');
        expect(data.errors[3].field[0]).toBe('stealDate');
        expect(data.errors[3].types[0]).toBe('date.base');
        expect(data.errors[4].field[0]).toBe('thiefDescription');
        expect(data.errors[4].types[0]).toBe('string.base');
        expect(data.errors[5].field[0]).toBe('found');
        expect(data.errors[5].types[0]).toBe('boolean.base');
        expect(data.errors[6].field[0]).toBe('owner');
        expect(data.errors[6].types[0]).toBe('number.integer');
        expect(data.errors[7].field[0]).toBe('handle');
        expect(data.errors[7].types[0]).toBe('number.base');
        expect(data.errors[8].field[0]).toBe('id');
        expect(data.errors[8].types[0]).toBe('number.base');
      });
    });

    test('it should not validate delete bike', () => {
      req.params.id = 'qwe123';

      mockValidation(validationRules.bikeDelete, req, (data) => {
        expect(data.errors.length).toBe(1);
        expect(data.errors[0].field[0]).toBe('id');
        expect(data.errors[0].types[0]).toBe('number.base');
      });
    });
  });
});

