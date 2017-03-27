'use strict';

const angular = require('angular');
const ngBenighted = angular.module('ngBenighted');

ngBenighted.component('gameHistory', {
  template: require('./game-history.html'),
  controller: 'GameHistoryController',
  controllerAs: 'gameHistoryCtrl'
});

ngBenighted.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);

function GameHistoryController($log, playerService) {
  $log.debug('GameHistoryController');
  this.history = playerService.history;
}
