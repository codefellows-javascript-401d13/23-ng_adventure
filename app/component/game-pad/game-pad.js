'use strict';

import angular from 'angular';
const carmenSandiego = angular.module('carmenSandiego');

carmenSandiego.component('gamePad', {
	template: require('./game-pad.html'),
	controller: 'GamePadController',
	controllerAd: 'gamePadCtrl'
});

carmenSandiego.controller('GamePadController', ['$log', 'travellerService', GamePadController]);

function GamePadController($log, travellerService) {
	$log.debug('GamePadController');

	/*this.directions*/
	this.moveDirection = this.directions[0];

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