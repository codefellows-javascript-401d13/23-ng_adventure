'use strict';

const angular = require('angular');
const ngBenighted = angular.module('ngBenighted');

ngBenighted.component('gameInfo', {
  template: require('./game-info.html'),
  controller: 'gameInfoController',
  controllerAs: 'gameInfoCtrl'
});

ngBenighted.controller('gameInfoController', ['$log', 'playerService', 'mapService', gameInfoController]);

function gameInfoController($log, playerService, mapService) {
  $log.debug('gameInfoController');

  this.fillInfo = function() {
    $log.debug('fillInfo');
    if (playerService.player.location === 'house') {
      return 'Congratulations! You have survived your tribulations! You find a way off the island and win. :-)';
    }
    if (mapService.mapData[playerService.player.location].he === 'all') {
      return 'Oops, you fell off a cliff. You lose due to being dead. :-('
    }
    if (playerService.player.hp < 1) return 'Oh dear! You have run out of health points and died.';
    if (playerService.history.length === 1) return playerService.player.info;
    if (playerService.history.length !== 1) return '';
  }
  this.fillDesc = function() {
    $log.debug('fillDesc');
    return mapService.mapData[playerService.player.location].desc;
  }
}
