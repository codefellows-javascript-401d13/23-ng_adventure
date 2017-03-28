'use strict';

const angular = require('angular');
const shoppingTime = angular.module('shoppingTime');

shoppingTime.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl'
});

shoppingTime.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService) {
  $log.debug('PlayerInfoController');
  this.player = playerService.player;
}
