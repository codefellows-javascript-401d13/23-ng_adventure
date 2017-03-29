'use strict';

const angular = require('angular');
const gollumsGame = angular.module('gollumsGame');

gollumsGame.factory('playerService', ['$q', '$log', 'mapService', 'questionsService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'Bilbo',
    location: service.randomStart(),
    hp: 3
  };

  let history = service.history = [
    {
      turn = 0,
      desc: 'Welcome to Gollums Game',
      location: player.location,
      hp: player.hp
    }
  ];

  service.randomStart = function() {
    let randomIdx = (Math.ceil(Math.random() * mapService.coordinates.length()));
    return mapService.coordinates[randomIdx];
  }

  service.setRing = function() {
    let randomIdx = (Math.ceil(Math.random() * mapService.coordinates.length()));
    mapService.coordinates[randomIdx].hasRing = true;
    $log.debug('ring was set!');
  }

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if (!newLocation) {
        history.unshift({
          turn,
          desc: 'you have hit a wall!!',
          location: player.location,
          hp: player.hp
        });
        return reject('no room in that direction');
      }

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
  service.setRing();
  return service;
}
