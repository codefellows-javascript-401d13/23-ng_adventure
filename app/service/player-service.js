'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('map service');

  let service = {};
  let turn = 0;
  let player = service.player = {
    name: 'Danny Rand',
    location: 'KungLun',
    hp: 25
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to Iron Fist',
      location: 'KungLun',
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => { //eslint-disable-line
      turn++;
      let current = player.location;
      let newLocation = mapService.mapData[current][direction];
      if(!newLocation){
        history.unshift({
          turn,
          desc: 'You need to go a different direction',
          location: player.location,
          hp: player.hp
        });
        return reject('no toom in that direction');
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
  return service;
}
