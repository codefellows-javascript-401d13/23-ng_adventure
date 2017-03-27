'use strict';

const angular = require('angular');
const sewerRat = angular.module('sewerRat');

sewerRat.component('gameHistory', {
  template: require('./game-history.html'),
  controller: 'GameHistoryController',
  controllerAs: 'gameHistCtrl'
});

sewerRat.controller('GameHistoryController', ['$log', 'playerService', GameHistoryController]);

function GameHistoryController($log, playerService){
  $log.debug('GameHistoryController');
  this.history = playerService.history;
};
