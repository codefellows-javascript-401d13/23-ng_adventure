'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    house: {
      desc: 'quaint looking house, but something is off about it',
      south: 'garden'
    },
    garden: {
      desc: 'lush, green garden filled with unusual looking plants',
      north: 'house',
      west: 'aviary',
      south: 'trail'
    },
    avairy: {
      desc: 'impressive aviary filled with exotic birds',
      east: 'garden'
    },
    trail: {
      desc: 'steep, winding trail overlooking the sea',
      north: 'garden',
      south: 'lighthouse'
    },
    lighthouse: {
      desc: 'old lighthouse, it doesn\'t seem to be working...',
      north: 'trail',
      south: 'lanternRoom'
    },
    lanternRoom: {
      desc: 'the skeleton of a forgotten lighthouse keeper greets you at the top floor of the lighthosue',
      north: 'lighthouse'
    }
  };

  return service;
};