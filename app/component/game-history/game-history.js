'use strict';

const angular = require('angular');

const prettyBigAdventure = angular.module('prettyBigAdventure');

prettyBigAdventure.component('gameHistory', {
  template: require('./game-history.html'),
  controller: 'GameHistoryController',
  controllerAs: 'gameHistoryCtrl'
});

prettyBigAdventure.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);

function GameHistoryController($log, playerService) {
  $log.debug('GameHistoryController');

  this.history = playerService.history;
  this.player = playerService.player;


}