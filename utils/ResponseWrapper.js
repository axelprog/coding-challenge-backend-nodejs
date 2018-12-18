const httpStatus = require('http-status');

class ResponseWrapper {
  constructor(data, status, responseMessage) {
    this.responseCode = status || httpStatus.OK;
    this.responseMessage = responseMessage || 'OK';
    this.response = data || {};
  }
}

const wrapResponse = (data, status, responseMessage) =>
  new ResponseWrapper(data, status, responseMessage);

const wrapSuccessResponse = data =>
  new ResponseWrapper(data, httpStatus.OK, 'OK');

module.exports = {
  wrapResponse,
  wrapSuccessResponse
};
