'use strict';

import angular from 'angular';
const weekendGetaway = angular.module('weekendGetaway');

weekendGetaway.factory('travellerService', ['$q', '$log', 'tripService', travellerService]);

function travellerService($q, $log, tripService) {
  $log.debug('travellerService');

  let service = {};

  let trip = 0;
  let traveller = service.traveller = {
    name: '',/*update with info from input*/
    location: ''//update with info from maps
  };

  let itinerary = service.itinerary = [
    {
      trip,
      desc: 'What do you want to do this weekend?',
      location: traveller.location,
    }
  ];

  service.moveTraveller = function(destination) {
    return new $q((resolve, reject) => {
      trip++;

      let current = traveller.location;
      let nextStop = tripService.someProp[current][b];
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
