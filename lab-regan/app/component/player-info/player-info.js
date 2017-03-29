'use strict';

const angular = require('angular');

const sewerRat = angular.module('sewerRat');

sewerRat.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl'
});

sewerRat.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);

function PlayerInfoController($log, playerService){
  $log.debug('PlayerInfoController');
  this.player = playerService.player;

  this.history = playerService.history[0];
  $log.debug(this.history.desc);
};
