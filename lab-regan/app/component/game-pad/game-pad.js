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

  this.movePlayer = function(){
    playerService.movePlayer(this.moveDirection)
    .then( loc => {
      $log.log(`Rat is now at ${loc}`);
    })
    .catch(err => {
      $log.error(err);
    });
  };
};
