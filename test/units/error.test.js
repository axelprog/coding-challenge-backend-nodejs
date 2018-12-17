import httpStatus from 'http-status';
import { Request } from 'jest-express/lib/request';
import { Response } from 'jest-express/lib/response';
import { ValidationError } from 'express-validation';
import toBeType from 'jest-tobetype';

import {
  converter,
  generateNotFoundError,
  convertGenericError,
  convertValidationError,
  notFound,
  handler
} from '../../utils/middlewares/error.middleware';

expect.extend(toBeType);

const response = new Response();
const request = new Request('/api/v1/auth/login', {
  method: 'PUT'
});

describe('Middleware - error', () => {
  const req = request;
  const res = response;
  const stubs = {}
  const validationError = new ValidationError([{
    location: 'body',
    messages: ['"nonce" is required'],
    types: ['any.required']
  }], {
    flatten: true,
    status: 400,
    statusText: 'validation error'
  });

  beforeEach(() => {
    stubs.statusStub = jest.spyOn(res, 'status');
    stubs.jsonStub = jest.spyOn(res, 'json');
    stubs.endStub = jest.spyOn(res, 'end');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should convert validation error into API error with custom route', () => {
    req.path = '/api/v1/auth/error';
    const route = 'root';
    validationError.route = route;
    const apiError = convertValidationError(validationError, req);

    expect(apiError).toHaveProperty('name');
    expect(apiError).toHaveProperty('errors');
    expect(apiError).toHaveProperty('status');
    expect(apiError).toHaveProperty('errors');
    expect(apiError).toHaveProperty('isPublic');
    expect(apiError).toHaveProperty('route');
    expect(apiError).toHaveProperty('isOperational');
    expect(apiError.name).toBe('APIError');
    expect(apiError.status).toBe(httpStatus.BAD_REQUEST);
    expect(apiError.errors).toBeType('array');
    expect(apiError.errors).not.toHaveLength(0);
    expect(apiError.errors[0]).toHaveProperty('errorCode');
    expect(apiError.errors[0].errorCode).toBe('api:v1:auth:error:validationError');
    expect(apiError.errors[0]).toHaveProperty('errorTitle');
    expect(apiError.errors[0].errorTitle).toBe('We seems to have a problem!');
    expect(apiError.errors[0]).toHaveProperty('errorDescription');
    expect(apiError.errors[0].errorDescription).toBe('We have some trouble validating your data - please contact our customer support');
    expect(apiError.errors[0]).toHaveProperty('errorDebugDescription');
    expect(apiError.errors[0].errorDebugDescription).toBe('"nonce" is required');
    expect(apiError.route).toBe(route);
  });

  test('should convert validation error into API error with default route', () => {
    req.path = '/api/v1/auth/error';

    delete validationError.route;
    const apiError = convertValidationError(validationError, req);

    expect(apiError).toHaveProperty('name');
    expect(apiError).toHaveProperty('errors');
    expect(apiError).toHaveProperty('status');
    expect(apiError).toHaveProperty('errors');
    expect(apiError).toHaveProperty('isPublic');
    expect(apiError).toHaveProperty('route');
    expect(apiError).toHaveProperty('isOperational');
    expect(apiError.name).toBe('APIError');
    expect(apiError.status).toBe(httpStatus.BAD_REQUEST);
    expect(apiError.errors).toBeType('array');
    expect(apiError.errors).not.toHaveLength(0);
    expect(apiError.errors[0]).toHaveProperty('errorCode');
    expect(apiError.errors[0].errorCode).toBe('api:v1:auth:error:validationError');
    expect(apiError.errors[0]).toHaveProperty('errorTitle');
    expect(apiError.errors[0].errorTitle).toBe('We seems to have a problem!');
    expect(apiError.errors[0]).toHaveProperty('errorDescription');
    expect(apiError.errors[0].errorDescription).toBe('We have some trouble validating your data - please contact our customer support');
    expect(apiError.errors[0]).toHaveProperty('errorDebugDescription');
    expect(apiError.errors[0].errorDebugDescription).toBe('"nonce" is required');
    expect(apiError.route).toBe('default');
  });

  test('should convert generic error into API error', () => {
    req.path = '/api/v1/auth/error';
    const error = new Error('Something went wrong');

    const apiError = convertGenericError(error, req);
    expect(apiError).toHaveProperty('name');
    expect(apiError).toHaveProperty('errors');
    expect(apiError).toHaveProperty('status');
    expect(apiError).toHaveProperty('errors');
    expect(apiError).toHaveProperty('isPublic');
    expect(apiError).toHaveProperty('route');
    expect(apiError).toHaveProperty('isOperational');
    expect(apiError.name).toBe('APIError');
    expect(apiError.status).toBe(httpStatus.INTERNAL_SERVER_ERROR);
    expect(apiError.errors).toBeType('array');
    expect(apiError.errors).not.toHaveLength(0);
    expect(apiError.errors[0]).toHaveProperty('errorCode');
    expect(apiError.errors[0].errorCode).toBe('api:v1:auth:error:unknown');
    expect(apiError.errors[0]).toHaveProperty('errorTitle');
    expect(apiError.errors[0].errorTitle).toBe('We seems to have a problem!');
    expect(apiError.errors[0]).toHaveProperty('errorDescription');
    expect(apiError.errors[0].errorDescription).toBe('Our internal system is having problem, please contact our administrator!');
    expect(apiError.errors[0]).toHaveProperty('errorDebugDescription');
    expect(apiError.errors[0].errorDebugDescription).toBe('Something went wrong');
  });


  test('should generate Not Found API error', () => {
    const apiError = generateNotFoundError();
    expect(apiError).toHaveProperty('name');
    expect(apiError).toHaveProperty('errors');
    expect(apiError).toHaveProperty('status');
    expect(apiError).toHaveProperty('errors');
    expect(apiError).toHaveProperty('isPublic');
    expect(apiError).toHaveProperty('route');
    expect(apiError).toHaveProperty('isOperational');
    expect(apiError.name).toBe('APIError');
    expect(apiError.status).toBe(httpStatus.NOT_FOUND);
    expect(apiError.errors).toBeType('array');
    expect(apiError.errors).not.toHaveLength(0);
    expect(apiError.errors[0]).toHaveProperty('errorCode');
    expect(apiError.errors[0].errorCode).not.toBe(''); // eslint-disable-line
    expect(apiError.errors[0]).toHaveProperty('errorTitle');
    expect(apiError.errors[0].errorTitle).toBe('Oops! We have a problem.');
    expect(apiError.errors[0]).toHaveProperty('errorDescription');
    expect(apiError.errors[0].errorDescription).toBe('We couldn\'t find what you\'re looking for - please contact our administrator!');
    expect(apiError.errors[0]).toHaveProperty('errorDebugDescription');
    expect(apiError.errors[0].errorDebugDescription).toBe('Invalid API route');
  });


  test('error converter should convert validation error', () => {
    converter(validationError, req, res);

    expect(stubs.statusStub).toBeCalledWith(httpStatus.BAD_REQUEST);
    expect(stubs.jsonStub).toHaveBeenCalledTimes(1);
    expect(stubs.endStub).toHaveBeenCalledTimes(1);
  });

  test('error converter should convert generic error', () => {
    const error = new Error('Something went wrongasdasdasddsa');
    converter(error, req, res);

    expect(stubs.statusStub).toBeCalledWith(httpStatus.INTERNAL_SERVER_ERROR);
    expect(stubs.jsonStub).toHaveBeenCalledTimes(1);
    expect(stubs.endStub).toHaveBeenCalledTimes(1);
  });

  test('error converter should convert APIError', () => {
    const error = convertValidationError(validationError, req);
    converter(error, req, res);

    expect(stubs.statusStub).toBeCalledWith(httpStatus.BAD_REQUEST);
    expect(stubs.jsonStub).toHaveBeenCalledTimes(1);
    expect(stubs.endStub).toHaveBeenCalledTimes(1);
  });

  test('notFound middleware should generate not found error', () => {
    notFound(req, res);

    expect(stubs.statusStub).toBeCalledWith(httpStatus.NOT_FOUND);
    expect(stubs.jsonStub).toHaveBeenCalledTimes(1);
    expect(stubs.endStub).toHaveBeenCalledTimes(1);
  });

  test('handler middleware should return http status message for error without message', () => {
    const err = new Error();
    err.status = httpStatus.INTERNAL_SERVER_ERROR;
    handler(err, req, res);

    expect(stubs.statusStub).toBeCalledWith(httpStatus.INTERNAL_SERVER_ERROR);
    expect(stubs.jsonStub).toHaveBeenCalledTimes(1);
    expect(stubs.endStub).toHaveBeenCalledTimes(1);
  });

  test('handler middleware should return error with error stack', () => {
    const err = new Error();
    err.status = httpStatus.INTERNAL_SERVER_ERROR;
    process.env.NODE_ENV = 'development';
    handler(err, req, res);

    expect(stubs.statusStub).toBeCalledWith(httpStatus.INTERNAL_SERVER_ERROR);
    expect(stubs.jsonStub).toHaveBeenCalledTimes(1);
    expect(stubs.endStub).toHaveBeenCalledTimes(1);
  });

  test('handler middleware should return error without error stack', () => {
    const err = new Error();
    err.status = httpStatus.INTERNAL_SERVER_ERROR;
    process.env.NODE_ENV = 'test';
    handler(err, req, res);

    expect(stubs.statusStub).toBeCalledWith(httpStatus.INTERNAL_SERVER_ERROR);
    expect(stubs.jsonStub).toHaveBeenCalledTimes(1);
    expect(stubs.endStub).toHaveBeenCalledTimes(1);
  });

  test('handler middleware should convert error with http status = 0, into internal server error', () => {
    const err = new Error();
    err.status = 0;
    handler(err, req, res);

    expect(stubs.statusStub).toBeCalledWith(httpStatus.INTERNAL_SERVER_ERROR);
    expect(stubs.jsonStub).toHaveBeenCalledTimes(1);
    expect(stubs.endStub).toHaveBeenCalledTimes(1);
  });
});
