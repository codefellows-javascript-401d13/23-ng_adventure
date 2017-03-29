'use strict';

import angular from 'angular';
const findyokeys = angular.module('findyokeys');

findyokeys.component('history', {
  template: require('./history.html'),
  controller: 'HistoryController',
  controllerAs: 'historyCtrl',
});

findyokeys.controller('HistoryController', ['$log', 'playaService', HistoryController]);

function HistoryController($log, playaService) {
  $log.debug('HistoryController');
  this.history = playaService.history;
}
