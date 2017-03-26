'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gameHistory', {
  template: require('./game-history.html'),
  controller: 'GameHistoryController',
  controllerAs: 'gameHistoryCtrl'
});

ngAdventure.controller['GameHistoryController','playerService', GameHistoryController]
);

function GameHistoryController($log, playerService) {
  $log.debug('GameHistoryController');
  this.history = playerService;
};
