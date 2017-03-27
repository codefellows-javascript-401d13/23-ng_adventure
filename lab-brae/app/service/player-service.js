'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('player service');

  let service = {};
  let name = prompt('what is your name?');

  let turn = 0;
  let player = service.player = {
    name: name,
    location: 'house',
    hp: 10
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome',
      location: player.location,
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'you can\'t go this way',
          location: player.location,
          hp: player.hp
        });
        return reject('nothing to see here');
      };

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
};