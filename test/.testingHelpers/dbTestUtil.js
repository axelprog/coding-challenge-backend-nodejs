const { Department, User, Bike, sequelize } = require('../../models/');

exports.initDatabase = () => Promise.all([
  Department.bulkCreate([
    { id: 1, name: 'mock department 1', description: 'test department 1 mock data' },
    { id: 2, name: 'mock department 2', description: 'test department 2 mock data' },
    { id: 3, name: 'mock department 3', description: 'test department 3 mock data' }
  ], { updateOnDuplicate: true }),
  User.bulkCreate([], { updateOnDuplicate: true }),
  Bike.bulkCreate([], { updateOnDuplicate: true })
]);


exports.cleanDatabase = () => sequelize.transaction((t) => {
  const options = { raw: true, transaction: t };
  return sequelize
    .query('SET FOREIGN_KEY_CHECKS = 0', options)
    .then(() => sequelize.query('truncate table departments', options))
    .then(() => sequelize.query('truncate table users', options))
    .then(() => sequelize.query('truncate table bikes', options))
    .then(() => sequelize.query('SET FOREIGN_KEY_CHECKS = 1', options));
});
