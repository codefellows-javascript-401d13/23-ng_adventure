'use strict';

const 
  angular = require('angular'),
  zeldaGame = angular.module('zeldaGame');

zeldaGame.component('playerControlls', {
  template: require('./player-controlls.html'),
  controller: 'PlayerControllsController',
  controllerAs: 'playerControllsCtrl'
});

zeldaGame.controller('PlayerControllsController', ['$log', 'playerService', PlayerControllsController]);

function PlayerControllsController($log, playerService) {
  $log.debug('PlayerControllsController');

  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function(){
    playerService.movePlayer(this.moveDirection)
    .then( location => $log.log('Player currently at location ', location))
    .catch( err => $log.error(err));
  };
}