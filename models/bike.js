'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bike = sequelize.define('Bike', {
    license: DataTypes.STRING,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
    stealDate: DataTypes.DATE,
    thiefDescription: DataTypes.TEXT,
    found: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
  }, {});
  Bike.associate = function(models) {
    // associations can be defined here
  };
  return Bike;
};
