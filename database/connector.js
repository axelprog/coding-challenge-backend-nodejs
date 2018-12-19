const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(config.get('db.dbName'), config.get('db.user'), config.get('db.password'), {
  host: config.get('db.host'),
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = sequelize;
