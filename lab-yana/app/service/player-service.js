'use strict';

const angular = require('angular');
const ngBenighted = angular.module('ngBenighted');

ngBenighted.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('player service');

  let service = {};
  let turn = 0;

  let player = service.player = {
    name: 'lostfool',
    info: `Hello, you were undoubtedly looking forward to your vacation, but on the way, your plane crashed in the ocean. Amazingly, you survived with no injuries and swam to a nearby small island. You see no sign of anyone else or the plane. Can you find how to get out of here? Of course, as time passes and you look for help, your health will deteriorate because you will be hungry and thirsty. You might find food and water on the way to boost your health, if you look in the right places. But you might also find some nasty surprises that will hurt you. If your health reaches 0, you lose (and are dead - oops). Good luck!`,
    location: 'beach',
    hp: 16
  };

  let history = service.history = [
    {
      turn,
      desc: 'you have crawled out of the angry ocean onto a desolate, barren beach.',
      location: 'beach',
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
          desc: `You can't go that way, ${player.name}, choose another direction!`,
          location: player.location,
          hp: player.hp
        });
        return reject('you cannot go that way')
      }

      --player.hp;
      player.location = newLocation;

      history.unshift({
        turn,
        desc: mapService.mapData[newLocation].desc,
        location: player.location,
        hp: player.hp
      });

      return resolve(player.location);
    });
  }
  return service;
}
