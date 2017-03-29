'use strict';

const angular = require('angular');

const sewerRat = angular.module('sewerRat');

sewerRat.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('player service');

  let service = {};

  let move = 0;
  let player = service.player = {
    name: 'Ratty',
    location: 'street',
    // location: mapService.name,
    health: 20,
    cash: 5
  };

  let history = service.history = [
    {
      move,
      desc: 'Welcome, sewer rat!',
      location: 'street',
      health: player.health,
      cash: player.cash
    }
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      move++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];
      if(!newLocation){
        history.unshift({
          move,
          desc: 'You can\'t go that way.',
          location: player.location,
          health: player.health
        });
        if((current == 'street' || current == 'treasure' || current == 'pizzaRestaurant' || current == 'dumpster') && direction == 'up') {
          $log.debug('You want to go up? Sorry you cant fly');
        }
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
