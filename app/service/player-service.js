'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure') ;

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'Fresh Meat',
    location: 'closet',
    hp: 16,
    yourName: false

  };

  let history = service.history = [
    {
      turn,
      desc: 'You just got bit by a zombie...get to the lunchroom then get outside to escape!',
      location: player.location,
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];
       
      // player.location = newLocation;
      if (!newLocation){
        history.unshift({
          turn,
          desc: 'you have hit a wall and a something is closing in on you!!!',
          location: player.location,
          hp: --player.hp
        });
        return reject('nowhere to hide here');
      }
      
      history.unshift({
        turn,
        // location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: --player.hp
      });
      
      player.location= newLocation;
      player.display = mapService.mapData[newLocation].display;

      return resolve(player.location);
    });
  };
  return service;
}
