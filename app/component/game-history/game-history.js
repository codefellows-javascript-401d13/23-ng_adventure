'use strict';

import angular from 'angular';
const carmenSanDiego = angular.module('carmenSanDiego');

carmenSanDiego.component('gameHistory', {
	template: import './game-history.html',
	controller: 'GameHistoryController',
	controllerAs: 'gameHistoryCtrl'
});

carmenSanDiego.controller('GameHistoryController', ['$log', 'travellerService', GameHistoryController]);

function GameHistoryController($log, travellerService) {
	$log.debug('GameHistoryController');

	this.itinerary = travellerService.itinerary;
};