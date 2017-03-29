'use strict';

import angular from 'angular';
const findyokeys = angular.module('findyokeys');

findyokeys.component('player', {
  template: require('./player.html'),
  controller: 'PlayerController',
  controllerAs: 'playerCtrl',
});

findyokeys.controller('PlayerController', ['$log', 'playaService', PlayerController]);

function PlayerController($log, playaService) {
  $log.debug('PlayerController');
  this.player = playaService.player;
}
