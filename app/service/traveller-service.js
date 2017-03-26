'use strict';

import angular from 'angular';
const carmenSanDiego = angular.module('carmenSanDiego');

carmenSanDiego.factory('travellerService', ['$q', '$log', 'mapService', travellerService]);

function travellerService($q, $log, mapService) {
  $log.debug('travellerService');

  let service = {};

  let trip = 0;
  let traveller = service.traveller = {
    name: 'Gumshoe',
    location: 'headquarters'
  };

  let itinerary = service.itinerary = [
    {
      trip,
      desc: 'Where in the world is Carmen Sandiego?',
      location: traveller.location,
    }
  ];

  service.moveTraveller = function(destination) {
    return new $q((resolve, reject) => {
      trip++;

      let current = traveller.location;
      let nextStop = mapService.someProp[current][b];
      //update with info from destination details

      if(!nextStop) {
        itinerary.unshift({
          trip,
          desc: 'nope, you can\'t go there!',
          location: traveller.location
        });
        return reject('not a valid location');
      }

      itinerary.unshift({
        trip,
        location: traveller.location,
        desc: ''//update with info from destination details
      });

      traveller.location = nextStop;
      return resolve(traveller.location);
    });
  };

  return service;
}
