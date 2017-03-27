'use strict';

import angular from 'angular';
const carmenSandiego = angular.module('carmenSandiego');

carmenSandiego.component('gamePad', {
	template: require('./game-pad.html'),
	controller: 'GamePadController',
	controllerAd: 'gamePadCtrl'
});

carmenSandiego.controller('GamePadController', ['$log', 'travellerService', 'mapService', GamePadController]);

function GamePadController($log, travellerService, mapService) {
	$log.debug('GamePadController');

	this.question = mapService.mapData[travellerService.traveller.location].question;
	this.clues = mapService.mapData[travellerService.traveller.location].clues;
	this.moveDirection = this.clues[0];

	this.movePlayer = function() {
		travellerService.movePlayer(this.moveDirection)
		.then( location => {
			$log.log(`player now at: ${location}`);
		})
		.catch( err => {
			$log.error(err);
		});
	};
};