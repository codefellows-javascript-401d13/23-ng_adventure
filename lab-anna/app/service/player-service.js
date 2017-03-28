'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let player = service.player = { 
    name: 'spider',
    location: 'web',
    hp: 16,
    x: mapService.mapData['web'].x,
    y: mapService.mapData['web'].y,
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to the Itsy Bitsy Spider game!',
      location: 'web',
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'Wrong way! Try again.',
          location: player.location,
          hp: player.hp
        });
        return reject('Cannot go in that direction');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp
      });

      player.location = newLocation;
      player.x = mapService.mapData[newLocation].x;
      player.y = mapService.mapData[newLocation].y;
      return resolve(player.location);
    });
  };
  return service;
};
