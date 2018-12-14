import responseTime from 'response-time';
import { logger } from '../../utils/logger';

const serviceName = 'StolenBikes'; // TODO: add to env and rewrite this logger
const pjsonversion = '0.0.1'; // TODO: add to env and rewrite this logger

const monitoringMiddleware = responseTime((req, res, time) => {
  const now = Date.now();
  const logData = {
    url: req.originalUrl,
    serviceName,
    version: pjsonversion,
    client: {
      ipAddress: req.ip
    },
    methodName: req.methodName,
    request: {
      header: req.headers,
      body: req.body,
      params: req.query
    },
    response: {
      header: res.header()._headers,
      body: req.responseBody
    },
    requestTime: Math.round((now - time) * 10) / 10,
    requestEnd: now,
    responseTime: time,
    statusCode: res.statusCode
  };
  logger.info(`API Request`, logData);
});


export default monitoringMiddleware;
