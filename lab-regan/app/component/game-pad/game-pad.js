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
    let valid = input.toLowerCase();
    playerService.movePlayer(valid)
    .then( loc => {
      $log.debug(`Rat is now at ${loc}`);
    })
    .catch(err => {
      $log.error(err);
    });
  };

  this.clearField = function(){
    this.text = '';
  }
};
