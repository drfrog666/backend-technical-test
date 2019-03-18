'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('locations', [{
        location: 'dude chilling park',
          lat: 49.5,
	  long: 120.45,
	  temp:12.4,

      },{
          location: 'greenaway park',
	  lat: 49.75,
	  long:120.645,
	  temp:2.4,
      }
						    ], {});
 
  },

  down: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkDelete('locations', null, {});
 
  }
};
