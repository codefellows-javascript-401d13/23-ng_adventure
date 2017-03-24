'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('map service');

  let service = {};

  service.mapData = {
    home: {
      desc: 'message from your house',
      south: 'road'
    },
    road:{
      desc: 'message from the road',
      north: 'home',
      east: 'beach',
      south: 'hole'
    },
    hole: {
      desc: 'you are stuck in a hole, that sucks',
      north: 'road'
    },
    beach: {
      desc: 'message from the beach',
      west: 'smoothie shop',
      east: 'ocean'
    },
    ocean:{
      desc: 'message from the ocean',
      west: 'beach',
      south: 'floaty'
    },
    floaty: {
      desc: 'message from the floatie',
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
