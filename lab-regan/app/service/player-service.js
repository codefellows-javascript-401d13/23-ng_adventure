'use strict';

const angular = require('angular');

const sewerRat = angular.module('sewerRat');

sewerRat.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('player service');

  let service = {};

  let move = 0;

  let player = service.player = {
    name: 'user-name',
    location: 'emptyStreet',
    health: 20
  };

  let history = service.history = [
    {
      move,
      desc: 'Welcome, sewer rat!',
      location: 'emptyStreet',
      health: player.health
    }
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      move++,

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation){
        history.unshift({
          move,
          desc: 'You ate some bad garbage, got confused, and ran into a wall',
          location: player.location,
          health: player.health
        });
        return reject('You don\'t want to go down there!');
      };

      history.unshift({
        move,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        health: player.health
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
};
