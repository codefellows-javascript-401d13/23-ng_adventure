'use strict';

import angular from 'angular';
const findyokeys = angular.module('findyokeys');

findyokeys.factory('playaService', ['$q', '$log', 'mapService', playaService]);

function playaService($q, $log, mapService) {
  $log.debug('playa service');

  let service = {};

  let minute = 0;
  let player = service.player = {
    name: 'Keyless in Seattle',
    location: 'lobby',
    minutes: 10,
  };

  let history = service.history = [
    {
      minute,
      msg: 'Find Yo Keys',
      location: 'lobby',
      minutes: player.minutes,
    },
  ];

  service.movePlaya = function(direction) {
    return new $q((resolve, reject) => {
      if (player.minutes <= 0) {
        return;
      }
      minute++;

      let current = player.location;
      let newLocation = mapService.locations[current][direction];

      if (!newLocation) {
        history.unshift({
          minute,
          msg: 'You drank too much coffee, that\'s not a right way',
          location: player.location,
          minutes: --player.minutes,
        });
        return reject();
      }

      history.unshift({
        minute,
        location: player.location,
        msg: mapService.locations[newLocation].msg,
        minutes: --player.minutes,
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}
