const expressValidation = require('express-validation');

exports.mockValidation = function(schema, req, done) {

  return expressValidation(schema)(req, {}, (validationResult) => done(validationResult));
};

exports.stubReq = function () {
  return Object.assign({}, {
    query: {},
    body: {},
    params: {},
    param(name) {
      return this.params[name];
    }
  })
};
