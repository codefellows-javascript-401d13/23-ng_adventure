'use strict';

const angular  = require('angular');
const prettyBigAdventure = angular.module('prettyBigAdventure');

prettyBigAdventure.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
});

prettyBigAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService) {
  $log.debug('GamePadController');

  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];
  this.player = playerService.player;

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
    .then( location => {
      $log.debug(`player currently at ${location}`, playerService.player.location);
    })
    .catch( err => {
      $log.error(err);
    });
  };
}