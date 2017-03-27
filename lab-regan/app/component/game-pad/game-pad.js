'use strict';

const angular = require('angular');
const sewerRat = angular.module('sewerRat');

sewerRat.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
})

sewerRat.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService){
  $log.debug('GamePadController');

  this.directions = ['north', 'south', 'east', 'west', 'up', 'down'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function(input){
    if(input != 'north' || input != 'south' || input != 'east' || input != 'west' || input != 'up' || input != 'down'){
      $log.debug('that is not a valid request. Choose "north, south, east, west, up, or down".');
    }
    playerService.movePlayer(input)
    .then( loc => {
      $log.log(`Rat is now at ${loc}`);
      // playerService.player.message = loc.message;
    })
    .catch(err => {
      $log.error(err);
    });
  };
};
