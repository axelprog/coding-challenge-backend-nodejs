'use strict';
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Department.associate = function(models) {
    Department.hasMany(models.User, { foreignKey: 'department', as: 'employer' });
  };
  return Department;
};
