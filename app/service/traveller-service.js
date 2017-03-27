'use strict';

import angular from 'angular';
const carmenSandiego = angular.module('carmenSandiego');

carmenSandiego.factory('travellerService', ['$q', '$log', 'mapService', travellerService]);

function travellerService($q, $log, mapService) {
  $log.debug('travellerService');

  let service = {};

  let trip = 0;
  let traveller = service.traveller = {
    name: 'Gumshoe',
    location: 'headquarters',
    crimebucks: 50
  };

  let itinerary = service.itinerary = [
    {
      trip,
      desc: 'Where in the world is Carmen Sandiego?',
      location: traveller.location,
      crimebucks: traveller.crimebucks
    }
  ];

  service.moveTraveller = function(destination) {
    return new $q((resolve, reject) => {
      trip++;

      let current = traveller.location;
      let nextStop = mapService.someProp[current][destination];

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
        desc: mapService.mapData[nextStop].desc,
        crimebucks: traveller.crimebucks
      });

      traveller.location = nextStop;
      traveller.crimebucks += 10;
      return resolve(traveller.location);
    });
  };

  return service;
}
