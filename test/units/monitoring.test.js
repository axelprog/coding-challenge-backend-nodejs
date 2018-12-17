import httpStatus from 'http-status';
import request from 'supertest';
import express from 'express';
import middleware from '../../utils/middlewares/monitoring.middleware';

import { logger } from '../../utils/logger';

jest.mock('../../utils/logger');

describe('Middleware - monitoringMiddleware', () => {
  let app;

  beforeEach(async () => {
    app = express();
  });

  afterEach(() => {});

  test('should pass request', () => {
    app.use((req, res, next) => {
      req.useragent = {
        browser: 'mocha',
        platform: 'node',
        os: 'OS X'
      };
      next();
    });
    app.use(middleware);
    const router = express.Router();
    app.use('/', router);

    router.get('/health', (req, res) => {
      res.status(200).send('OK');
    });

    return request(app)
      .get('/health')
      .set('useragent', 'Something')
      .expect(httpStatus.OK)
      .then(() => {
        expect(logger.info).toBeCalledTimes(1);
      });
  });
});
