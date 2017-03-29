'use strict';

import angular from 'angular';
const findyokeys = angular.module('findyokeys');

findyokeys.component('gamepad', {
  template: require('./gamepad.html'),
  controller: 'GamepadController',
  controllerAs: 'gamepadCtrl',
});

findyokeys.controller('GamepadController', ['$log',  'playaService', GamepadController]);

function GamepadController($log, playaService) {
  $log.debug('GamepadController');

  this.directions = ['up', 'down', 'left', 'right'];
  this.moveDirection = this.directions[0];

  this.movePlaya = function() {
    playaService.movePlaya(this.moveDirection)
    .then( location => {
      $log.log(`playa @ ${location}`);
    })
    .catch( err => {
      $log.error(err);
    });
  };
}
