const dbConnector = require('../../database/connector');

describe('Database initialization', () => {
  beforeEach(() => {});

  afterEach(() => {});

  test('Should initialize DB connection', async () => {
    expect.assertions(1);
    await expect(dbConnector.authenticate()).resolves.toBeUndefined();
  });
});
