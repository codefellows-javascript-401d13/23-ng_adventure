'use strict';

import angular from 'angular';
const carmenSandiego = angular.module('carmenSandiego');

carmenSandiego.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
  	headquarters: {
  		desc: 'Go away and find that crook!',
      clues: ['Juneau, AK', 'Augusta, ME', 'Tallahassee, FL', 'Boston, MA'],
  		question: 'Capital of the state that has the eastern most point in the US.',
      juneau: {
  			position: {
  				lat: 58.301449,
  				lng: -134.421613
  			}
  		}
  	},
  	juneau: {
  		desc: 'Capital of the state that has the eastern most point in the US.',
      clues: ['Abidjan, Cote d\'Ivoire', 'Juba, South Sudan', 'Dongou, Republic of the Congo', 'Yaounde, Cameroon'],
      question: 'This is the center of the only continent that is in all 4 hemispheres.',
      dongou: {
  			position: {
  				lat: 2.05,
  				lng: 18.05
  			}
  		}
  	},
  	dongou: {
  		desc: 'This is the center of the only continent that is in all 4 hemispheres.',
      clues: ['Mexico City', 'Rio de Janiero', 'Tokyo', 'Hulunbuir'],
      question: 'At 101,913 square miles, this is the largest geographical city in the world',
      hulunbuir: {
  			position: {
  				lat: 49.2,
  				lng: 119.7
  			}
  		}
  	},
  	hulunbuir: {
  		desc: 'At 101,913 square miles, this is the largest geographical city in the world',
      clues: ['Mt. Fuji', 'Mt. Everest', 'Mt. Chimborazo', 'Mt. Kilimanjaro'],
  		question: 'Place on earth where you can get closest to space and furthest from the center of the earth.',
      chimborazo: {
  			location: {
  				lat: -1.469167,
  				lng: -78.8175,
  			}
  		}
  	},
  	chimborazo: {
  		desc: 'Look up after dark and see more stars here than anywhere else in the world!',
      clues: ['Palmerston Island', 'Svalbard, Norway', 'Concordia Research Station', 'Oymyakon, Russia'],
  		question: 'This research station is more remote than even the International Space Station.',
      concordia: {
  			location: {
  				lat: -75.1,
  				lng: 123.33333
  			}
  		}
  	},
  	concordia: {
  		desc: 'Brrrr! This station in Antartica is also consistently the coldest place on earth so bundle up!',
      clues: ['San Diego, CA', 'Boise, ID', 'Reno, NV', 'Spokane, WA'],
  		question: 'This Biggest Little City in the world is actually west of Los Angeles.',
      reno: {
  			location: {
  				lat: 39.527222,
  				lng: -119.821944
  			}
  		}
  	},
    reno: {
      desc: 'Congratulations, you caught up to Carmen!',
      concordia: {
        location: {
          lat: -75.1,
          lng: 123.33333
        }
      }
    }
  };

  return service;
}
