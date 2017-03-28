'use strict';

const angular = require('angular');
const prettyBigAdventure = angular.module('prettyBigAdventure');

prettyBigAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('playerService');

  let service = {};

  let turn = 0;

  let player = service.player = {
    name: '',
    location: 'field',
    hp: 16,
    display: require('../display/startup.txt'),
    nameSet: false

  };

  let history = service.history = [
    {
      turn, //es6 syntax
      desc: 'Welcome to the Pretty Big Adventure',
      location: player.location,
      hp: player.hp,
    }
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      turn ++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'you can\'t go that way!!',
          location: player.location,
          hp: --player.hp
        });
        return reject('You can\'t go that way and you should feel bad. -1 hp');
      }

      history.unshift({
        turn,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp
      });

      player.location= newLocation;
      player.display = mapService.mapData[newLocation].display;

      return resolve(player.location);
    });
  };

  return service;
}