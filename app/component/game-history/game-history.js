'use strict';

import angular from 'angular';
const carmenSandiego = angular.module('carmenSandiego');

carmenSandiego.component('gameHistory', {
	template: require('./game-history.html'),
	controller: 'GameHistoryController',
	controllerAs: 'gameHistoryCtrl'
});

carmenSandiego.controller('GameHistoryController', ['$log', 'travellerService', GameHistoryController]);

function GameHistoryController($log, travellerService) {
	$log.debug('GameHistoryController');

	this.itinerary = travellerService.itinerary;
};