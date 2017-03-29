'use strict';

const angular = require('angular');
const ngBenighted = angular.module('ngBenighted');

ngBenighted.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl'
});

ngBenighted.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService) {
  $log.debug('PlayerInfoController');
  this.player = playerService.player;
}
