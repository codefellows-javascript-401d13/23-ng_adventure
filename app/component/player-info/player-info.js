'use strict';

import angular from 'angular';
const carmenSanDiego = angular.module('carmenSanDiego');

carmenSanDiego.component('playerInfo', {
	template: import './player-info.html',
	controller: 'PlayerInfoController',
	controllerAs: 'playerInfoCtrl'
});

carmenSanDiego.controller('PlayerInfoController', ['$log', 'travellerService', PlayerInfoController]);

function PlayerInfoController('$log', travellerService) {
	$log.debug('PlayerInfoController');

	this.traveller = travellerService.traveller;
};