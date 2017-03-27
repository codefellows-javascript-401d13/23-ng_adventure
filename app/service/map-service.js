'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('map service');

  let service = {};

  service.mapData = {
    home: {
      desc: 'Its a sunny day, time to play!',
      south: 'road'
    },
    road:{
      desc: 'Theres a few options for you here, where to next?',
      north: 'home',
      east: 'beach',
      south: 'hole'
    },
    hole: {
      desc: 'whoops! Wrong way! You are stuck in a hole.',
      north: 'road'
    },
    beach: {
      desc: 'Well, the beach is quite nice today, to go in or not?',
      west: 'smoothie shop',
      east: 'ocean'
    },
    ocean:{
      desc: 'Ooooh the water feels nice, keep swimming',
      west: 'beach',
      south: 'floaty'
    },
    floaty: {
      desc: 'Sit back and relax while you float the the dock',
      north: 'ocean',
      east: 'dock'
    },
    dock: {
      desc: 'you have made it to the doc, good job',
      west: 'floaty'
    }
  };

  return service;
}
