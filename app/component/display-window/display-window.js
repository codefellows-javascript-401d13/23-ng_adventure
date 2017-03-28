'use strict';

const angular = require('angular');


const prettyBigAdventure = angular.module('prettyBigAdventure');

prettyBigAdventure.component('displayWindow', {
  template: require('./display-window.html'),
  controller: 'DisplayWindowController',
  controllerAs: 'displayWindowCtrl'
});

prettyBigAdventure.controller('DisplayWindowController', ['$log', 'playerService', DisplayWindowController]);

function DisplayWindowController($log, playerService) {
  $log.debug('DisplayWindowController', playerService.player.location);
  this.history = playerService.history;
  this.player = playerService.player;
}