'use strict';

const
  angular = require('angular'),
  zeldaGame = angular.module('zeldaGame');

zeldaGame.component('playerHistory', {
  template: require('./player-history.html'),
  controller: 'PlayerHistoryController',
  controllerAs: 'playerHistoryCtrl'
});

zeldaGame.controller('PlayerHistoryController', ['$log', 'playerService', PlayerHistoryController]);

function PlayerHistoryController($log, playerService){
  $log.debug('Player History Controller');
  this.history = playerService.history;
}