const Mutex = require('../../utils/mutex');
const { Department, User, Bike, sequelize } = require('../../models/');

const mutex = new Mutex(); // for lock parallel of tests works with DB

exports.initDatabase = async () => {

  await mutex.lock();

  await Promise.all([
    Department.bulkCreate([
      { id: 1, name: 'mock department 1', description: 'test department 1 mock data' },
      { id: 2, name: 'mock department 2', description: 'test department 2 mock data' },
      { id: 3, name: 'mock department 3', description: 'test department 3 mock data' }
    ], { updateOnDuplicate: true }),

    User.bulkCreate([
      { id:1, firstName: 'John', lastName: 'Smith', email: 'test@test.ai', password: 'qwe123.#@!', role: 'admin' },
      { id:2, firstName: 'Jane', lastName: 'Doe', email: 'wsad@test.ai', password: 'zxc123.#@!', role: 'manager' },
      { id:3, firstName: 'Jack', lastName: 'Wesson', email: 'qwerty@test.ai', password: 'asd123.#@!', role: 'police' },
      { id:4, firstName: 'Tony', lastName: 'Colt', email: 'asdgfg@test.ai', password: 'asd123.#@!', role: 'police' },
      { id:5, firstName: 'James', lastName: 'Hetfield ', email: 'acdc@test.ai', password: 'asd123.#@!', role: 'user' }
    ], { updateOnDuplicate: true }),

    Bike.bulkCreate([
      { id:1, license: 'ask123.qaxz', color: 'yellow', type: 'star', stealDate: '2017-05-05', thiefDescription: 'old man', found: false },
      { id:2, license: 'qwe456.gdf', color: 'green', type: 'giant', stealDate: '2016-01-12', thiefDescription: 'has scar', found: false },
      { id:3, license: 'zxc23.sfgd', color: 'blue', type: 'hammer', stealDate: '2015-08-07', thiefDescription: 'woman with green hair', found: false },
      { id:4, license: 'wasde12354.ssdf', color: 'pink', type: 'ricoh', stealDate: '2018-11-22', thiefDescription: '-', found: false },
    ], { updateOnDuplicate: true })
  ]);

  const departments = await Department.findAll();
  const users = await User.findAll();
  const bikes = await Bike.findAll();

  return Promise.all([
    departments[2].setEmployer([users[2], users[3]]),

    users[2].setStolenBikes([bikes[0]], bikes[1]),
    users[4].setStolenBikes([bikes[2]], bikes[3]),

    users[2].setSeekBike(bikes[0]),
    users[3].setSeekBike(bikes[1])
  ]);

};


exports.cleanDatabase = async () => sequelize.transaction(async (t) => {
  const options = { raw: true, transaction: t };

  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0', options);
  await sequelize.query('truncate table departments', options);
  await sequelize.query('truncate table users', options);
  await sequelize.query('truncate table bikes', options);
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1', options);

  mutex.release();
});
