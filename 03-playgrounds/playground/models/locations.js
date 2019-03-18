'use strict';
module.exports = (sequelize, DataTypes) => {
  const locations = sequelize.define('locations', {
    location: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT,
    temp: DataTypes.FLOAT
  }, {});
  locations.associate = function(models) {
    // associations can be defined here
  };
  return locations;
};
