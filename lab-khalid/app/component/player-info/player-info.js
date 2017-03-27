'use strict';

const
  angular = require('angular'),
  zeldaGame = angular.module('zeldaGame');

zeldaGame.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl'
});

zeldaGame.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService) {
  $log.debug('Player Info Controller');
  console.log('>>>>>>>>>>',playerService);
  this.player = playerService.player;
}