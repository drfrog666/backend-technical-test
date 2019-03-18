var express = require('express');
var router = express.Router();
const OpenWeatherMapHelper = require("openweathermap-node");
const helper = new OpenWeatherMapHelper(
    {
	APPID: '30c2aa576b6b3cb1e230334a18c3287e',
	units: "metric"
    }
);

var NodeGeocoder = require('node-geocoder');
var options = {
  provider: 'google',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyDm-EpTfg6Ezn464ARGaNTJWmKiV8jKsJo', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);
 
var models = require('../models');

router.get('/', function(req, res, next) {

    models.locations.findAll({
    }).then(function(locations) {
        res.json(locations);
    } );
    
});

router.post('/create/',  function(req, res, next) {
    
    geocoder.geocode(req.body.location)
    .then(function(gres) {
        helper.getCurrentWeatherByGeoCoordinates(gres[0]['latitude'], gres[0]['longitude'], (err, currentWeather) => {
            models.locations.create({
                location: req.body.location,
                lat:gres[0]['latitude'],
                long:gres[0]['longitude'],
                temp:(currentWeather.main.temp - 273.15).toFixed(2),
            }).then(location => {
        
                res.json(location);
         
            }).catch(err => {
                    console.log("Error "+err);
                    res.json("Error -> " + err);
            }) 
        });
    })
  
    .catch(function(err) {
        console.log(err);
    });    
});


module.exports = router;
