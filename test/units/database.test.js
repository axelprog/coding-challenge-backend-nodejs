const dbConnector = require('../../models');

describe('Database initialization', () => {
  beforeEach(() => {});

  afterEach(() => {});

  test('Should initialize DB connection', async () => {
    expect.assertions(1);
    await expect(dbConnector.sequelize.authenticate()).resolves.toBeUndefined();
  });
});
