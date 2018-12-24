'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('admin', 'manager', 'police', 'user') // left so that simplify migration generation
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Bike, { foreignKey: 'owner', as: 'stolenBikes' });
    User.hasOne(models.Bike, { foreignKey: 'handle', as: 'seekBike' });
  };
  return User;
};
