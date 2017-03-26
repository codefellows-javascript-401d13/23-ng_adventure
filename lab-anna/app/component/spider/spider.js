'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('spider', {
  template: require('./spider.html'),
  controller: 'SpiderController',
  controllerAs: 'spiderCtrl'
});

ngAdventure.controller('SpiderController', ['$log', 'playerService', SpiderController]);

function SpiderController($log, playerService) {
  $log.debug('GameHistoryController');

}
