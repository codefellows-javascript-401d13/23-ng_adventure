'use strict';

const angular = require('angular');
const prettyBigAdventure = angular.module('prettyBigAdventure');

prettyBigAdventure.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoCtrl'
});

prettyBigAdventure.controller('PlayerInfoController', ['$log', 'playerService', 'mapService', PlayerInfoController]);

function PlayerInfoController($log, playerService, mapService) {
  this.player = playerService.player;
  this.history = playerService.history;
  $log.debug('PlayerInfoController', playerService.player.desc);
  this.startGame = function(){

    playerService.player.nameSet = true;
    playerService.history[0].desc = mapService.mapData.field.desc;
    playerService.player.display = mapService.mapData.field.display;

  };
}