/* eslint-disable arrow-body-style */
const httpStatus = require('http-status');

const { wrapResponse, wrapSuccessResponse } = require('../../utils/ResponseWrapper');

describe('Test Response Wrapper', () => {
  test('should be a correct wrapper with initialization', () => {
    const wrapper = wrapResponse({ title: 'unit test title' }, httpStatus.IM_A_TEAPOT, 'unit test message');
    expect(wrapper).toHaveProperty('responseCode');
    expect(wrapper).toHaveProperty('responseMessage');
    expect(wrapper).toHaveProperty('response');
    expect(wrapper.responseCode).toBe(httpStatus.IM_A_TEAPOT);
    expect(wrapper.responseMessage).toBe('unit test message');
    expect(wrapper.response).toHaveProperty('title');
    expect(wrapper.response.title).toEqual('unit test title');
  });

  test('should be acorrect wrapper with partially data', () => {
    const wrapper = wrapResponse({ title: 'unit test title' });
    expect(wrapper).toHaveProperty('responseCode');
    expect(wrapper).toHaveProperty('responseMessage');
    expect(wrapper).toHaveProperty('response');
    expect(wrapper.responseCode).toBe(httpStatus.OK);
    expect(wrapper.responseMessage).toBe('OK');
    expect(wrapper.response).toHaveProperty('title');
    expect(wrapper.response.title).toEqual('unit test title');
  });

  test('should be a correct wrapper without initialization', () => {
    const wrapper = wrapSuccessResponse();
    expect(wrapper).toHaveProperty('responseCode');
    expect(wrapper).toHaveProperty('responseMessage');
    expect(wrapper).toHaveProperty('response');
    expect(wrapper.responseCode).toBe(httpStatus.OK);
    expect(wrapper.responseMessage).toBe('OK');
    expect(wrapper.response).toEqual({});
  });

  test('should return default success response with set data', () => {
    const wrapper = wrapSuccessResponse({ title: 'unit test' });
    expect(wrapper).toHaveProperty('responseCode');
    expect(wrapper).toHaveProperty('responseMessage');
    expect(wrapper).toHaveProperty('response');
    expect(wrapper.responseCode).toBe(httpStatus.OK);
    expect(wrapper.responseMessage).toBe('OK');
    expect(wrapper.response).toHaveProperty('title');
    expect(wrapper.response.title).toEqual('unit test');
  });

  test('should return default success response with empty object', () => {
    const wrapper = wrapSuccessResponse();
    expect(wrapper).toHaveProperty('responseCode');
    expect(wrapper).toHaveProperty('responseMessage');
    expect(wrapper).toHaveProperty('response');
    expect(wrapper.responseCode).toBe(httpStatus.OK);
    expect(wrapper.responseMessage).toBe('OK');
    expect(wrapper.response).toEqual({});
  });
});
