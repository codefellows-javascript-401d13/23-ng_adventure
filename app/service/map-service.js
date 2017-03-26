'use strict';

import angular from 'angular';
const carmenSanDiego = angular.module('carmenSanDiego');

carmenSanDiego.factory('mapService', ['$log', tripService]);

function tripService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
  	headquarters: {
  		desc: 'Go away and find that crook!',
  		juneau: {
  			question: 'Capital of the state that has the eastern most point in the US.',
  			position: {
  				lat: 58.301449,
  				lng: -134.421613
  			}
  		}
  	},
  	juneau: {
  		desc: 'Capital of the state that has the eastern most point in the US.',
  		dongou: {
  			position: {
  				lat: 2.05,
  				lng: 18.05
  			}
  		}
  	},
  	dongou: {
  		desc: 'This is the center of the only continent that is in all 4 hemispheres.',
  		hulunbuir: {
  			position: {
  				lat: 49.2,
  				lng: 119.7
  			}
  		}
  	},
  	hulunbuir: {
  		desc: 'At 101,913 square miles, this is the largest geographical city in the world',
  		chimborazo: {
  			question: 'Place on earth where you can get closest to space and furthest from the center of the earth.',
  			location: {
  				lat: -1.469167,
  				lng: -78.8175,
  			}
  		}
  	},
  	chimborazo: {
  		desc: 'Look up after dark and see more stars here than anywhere else in the world!',
  		concordia: {
  			question: 'This research station is more remote than even the International Space Station.',
  			location: {
  				lat: -75.1,
  				lng: 123.33333
  			}
  		}
  	},
  	concordia: {
  		desc: 'Brrrr! This is also consistently the coldest place on earth so bundle up!',
  		reno: {
  			question: 'This Biggest Little City in the world is actually west of Los Angeles.',
  			location: {
  				lat: 39.527222,
  				lng: -119.821944
  			}
  		}
  	}
  };

  return service;
}
