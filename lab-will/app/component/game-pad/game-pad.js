'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
});

ngAdventure.controller('GamePadController', ['$log',  'playerService', GamePadController]);

function GamePadController($log, playerService) {
  $log.debug('GamePadController');

  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];

  console.log(this.moveDirection);

  this.movePlayer = function(direction) {
    console.log(this);
    playerService.movePlayer(direction)
    .then( location => {
      $log.log(`player currently at: ${location}`);
    })
    .catch( err => {
      $log.error(err);
    });
  };
};
