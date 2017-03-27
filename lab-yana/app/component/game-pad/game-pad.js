'use strict';

const angular = require('angular');
const ngBenighted = angular.module('ngBenighted');

ngBenighted.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
});

ngBenighted.controller('GamePadController', ['$log', 'playerService', 'mapService', GamePadController]);

function GamePadController($log, playerService, mapService) {
  $log.debug('GamePadController');

  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];
  this.instructions = 'Choose a direction: ';
  this.buttonLabel = 'GO';
  this.gameOn = true;

  this.move = function() {
    this.movePlayer();
    if (playerService.player.hp === 100) return this.gameOn = false;
    if (playerService.player.hp < 1) this.gameOn = false;
    if (mapService.mapData[playerService.player.location].he) {
      let healtheffect = mapService.mapData[playerService.player.location].he;
      if (healtheffect === 'all') {
        playerService.player.hp = 0;
        this.gameOn = false;
        return;
      }
      if (healtheffect === 'end') return this.gameOn = false;
      playerService.player.hp += healtheffect;
    }
  }

  this.movePlayer = function() {
    playerService.movePlayer(this.moveDirection)
    .then(location => $log.log(`player currently at: ${location}`))
    .catch(err => $log.error(err));
  };
}
