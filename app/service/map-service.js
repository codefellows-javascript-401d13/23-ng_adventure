'use strict';

import angular from 'angular';
const carmenSandiego = angular.module('carmenSandiego');

carmenSandiego.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    headquarters: {
      name: 'headquarters',
      desc: 'Go away and find that crook!',
      clues: ['juneau', 'augusta', 'tallahassee', 'boston'],
      question: 'Capital of the state that has the eastern most point in the US.',
      position: {
        lat: 47.609722,
        lng: -122.333056
      }
    },
    juneau: {
      name: 'Juneau, Alaska',
      desc: 'Capital of the state that has the eastern most point in the US.',
      clues: ['abidjan', 'juba', 'dongou', 'yaounde'],
      question: 'This is the center of the only continent that is in all 4 hemispheres.',
      position: {
        lat: 58.301449,
        lng: -134.421613
      },
      dongou: {
        position: {
          lat: 2.05,
          lng: 18.05
        }
      }
    },
    dongou: {
      name: 'Dongou, Republic of the Congo',
      desc: 'This is the center of the only continent that is in all 4 hemispheres.',
      clues: ['mexicoCity', 'sanPaulo', 'tokyo', 'hulunbuir'],
      question: 'At 101,913 square miles, this is the largest geographical city in the world',
      hulunbuir: {
        position: {
          lat: 49.2,
          lng: 119.7
        }
      }
    },
    hulunbuir: {
      name: 'Hulunbuir, Inner Mongolia',
      desc: 'At 101,913 square miles, this is the largest geographical city in the world',
      clues: ['fuji', 'everest', 'chimborazo', 'kilimanjaro'],
      question: 'Place on earth where you can get closest to space and furthest from the center of the earth.',
      chimborazo: {
        location: {
          lat: -1.469167,
          lng: -78.8175,
        }
      }
    },
    chimborazo: {
      name: 'Mt. Chimborazo, Ecuador',
      desc: 'Look up after dark and see more stars here than anywhere else in the world!',
      clues: ['palmerstonIsland', 'svalbard', 'concordia', 'oymyakon'],
      question: 'This research station is more remote than even the International Space Station.',
      concordia: {
        location: {
          lat: -75.1,
          lng: 123.33333
        }
      }
    },
    concordia: {
      name: 'Concordia Research Station, Antartica',
      desc: 'Brrrr! This station in Antartica is also consistently the coldest place on earth so bundle up!',
      clues: ['sanDiego', 'boise', 'reno', 'spokane'],
      question: 'This Biggest Little City in the world is actually west of Los Angeles.',
      reno: {
        location: {
          lat: 39.527222,
          lng: -119.821944
        }
      }
    },
    reno: {
      name: 'Reno, Nevada',
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
