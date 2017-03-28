'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService) {
  $log.debug('player service');

  let service = {};

  let turn = 0;
  let key = 0;
  let player = service.player = {
    name: 'Gary',
    location: 'Hall',
  };

  let history = service.history = [
    {
      turn,
      story: 'Gary enters the old house quietly and with a bit of a shudder. The door slams shut behind him, he checks the door it is locked. In order for him to leave he will need to find the key.',
      desc: 'There is a door to the right and left.',
      location: player.location
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
          story: 'um, just like before except now you are sore because, ',
          desc: 'you have hit a wall!!!',
          location: player.location
        });
        return reject('no room in that direction');
      }
      $log.debug('in', player.location, 'key', key);
      if (player.location === 'Hall' && key === 1) {
        mapService.mapData[newLocation].story = 'Gary rushes to the locked door, turns the key and escapes.  Win!!!!!!!!!';

      }



      history.unshift({
        turn,
        story: mapService.mapData[newLocation].story,
        location: player.location,
        desc: mapService.mapData[newLocation].desc
      });

      player.location = newLocation;


      if (player.location === 'attic' && key !== 1) {
        key = 1;
        mapService.mapData[newLocation].story = 'Been here before, looks like Gary is lost.';
        $log.debug('you found the key', key);
      }

      return resolve(player.location);
    });
  };

  return service;
}
