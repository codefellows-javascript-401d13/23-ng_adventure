'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let player = service.player = {
    name: 'Sir Frumpldorf of Horkshire',
    location: 'cellA',
    hp: 16
  };

  let history = service.history = [
    {
      turn,
      desc: "You awake in a dark room. You are handcuffed to a radiator. As you sit up, you become aware of your splitting headache. It feels like a couple of monkeys fighting over a jar of marbles. Now, what do do about your handcuff predicament? Luckily for you, you're paranoid and you have a handcuff key hidden in your beard for just this situation. You get up and as you look around, there is only one exit to the east. Looks like that's the place to go next.",
      location: 'cellA',
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
          desc: 'You have run into a wall',
          location: player.location,
          hp: player.hp
        });
        return reject('no room in that direction');
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
