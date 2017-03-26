'use strict';

import angular from 'angular';
const weekendGetaway = angular.module('weekendGetaway');

weekendGetaway.component('gameHistory', {
	template: import './game-history.html',
	controller: 'GameHistoryController',
	controllerAs: 'gameHistoryCtrl'
});

weekendGetaway.controller('GameHistoryController', ['$log', 'travellerService', GameHistoryController]);

function GameHistoryController($log, travellerService) {
	$log.debug('GameHistoryController');

	this.history = travellerService.history;
};