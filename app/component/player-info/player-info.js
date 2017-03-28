'use strict';

import angular from 'angular';
const carmenSandiego = angular.module('carmenSandiego');

carmenSandiego.component('playerInfo', {
	template: require('./player-info.html'),
	controller: 'PlayerInfoController',
	controllerAs: 'playerInfoCtrl'
});

carmenSandiego.controller('PlayerInfoController', ['$log', 'travellerService', PlayerInfoController]);

function PlayerInfoController($log, travellerService) {
	$log.debug('PlayerInfoController');

	this.traveller = travellerService.traveller;
}
