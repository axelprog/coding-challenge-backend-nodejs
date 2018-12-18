/* istanbul ignore file */
const serviceName = 'StolenBikes'; // TODO: add to env and rewrite this logger

exports.routes = {
  root: 'default'
};

exports.services = {
  input: 'input',
  route: 'route'
};

exports.codes = {
  userNotFound: 'userNotFound',
  validationError: 'validationError',
  notFound: 'notFound',
  unknown: 'unknown',
  recordNotFound: 'recordNotFound'
};

exports.getErrorCode = (route, service, code) => {
  const result = [serviceName, route, service, code].join(':');
  return result;
};
