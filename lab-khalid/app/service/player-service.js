'use strict';

const 
  angular = require('angular'),
  zeldaGame = angular.module('zeldaGame');

zeldaGame.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('player Service');

  let service = {};
  

  let turn = 0;
  let player = service.player = {
    name: 'John Snow',
    location: 'home',
    img: 'http://www.mrwallpaper.com/wallpapers/House-Winter-Cartoon-1600x1200.jpg',
    hp: 100
  };

  let history = service.history = [
    {
      turn,
      desc: 'Oh your awake, go save the princess, lazy couch potatoe!',
      img: player.img,
      location: player.location,
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current  = player.location;
      let newLocation = mapService.mapData[current][direction];
      let newImg = mapService.mapData[current].img;

      if(!newLocation){
        history.unshift({
          turn,
          desc: 'You have hit a wall!',
          location: player.location,
          hp: player.hp
        });
        return reject('That trail leads to a dead end');
      }

      history.unshift({
        turn,
        desc: mapService.mapData[newLocation].desc,
        img: mapService.mapData[newLocation].img,
        location: player.location,
        hp: player.hp
      });

      player.location = newLocation;
      player.img = newImg;

      return resolve(player);
    });
  };
  
  return service;

}