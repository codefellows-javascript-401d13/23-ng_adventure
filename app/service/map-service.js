'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    hall: {
      desc: 'There is a door to the right and left.',
      left: 'greenhouse',
      right: 'kitchen'
    },
    greenhouse: {
      desc: 'There is a door to the right, stairs going up and a secret passage.',
      right: 'hall',
      upstairs: 'gameroom',
      secretpassage: 'study'
    },
    kitchen: {
      desc: 'There is a door to the left, stairs going up and a secret passage.',
      left: 'hall',
      upstairs: 'library',
      secretpassage: 'bedroom'
    },
    library: {
      desc: 'There is a door to the left, stairs going up and stairs going down.',
      left: 'bathroom',
      upstairs: 'study',
      downstairs: 'kitchen'
    },
    bathroom: {
      desc: 'There is a door to the left, a door to the right and stairs going up.',
      left: 'gameroom',
      right: 'library',
      upstairs: 'nursery'
    },
    gameroom: {
      desc: 'There is a door to the right, stairs going up and stairs going down.',
      right: 'bathroom',
      upstairs: 'bedroom',
      downstairs: 'greenhouse'
    },
    bedroom: {
      desc: 'There is a door to the right, stairs going down and a secret passage.',
      right: 'nursery',
      downstairs: 'gamerooom',
      secretpassage: 'kitchen'
    },
    nursery: {
      desc: 'There is a door to the right, a door to the left and stairs going down.',
      right: 'study',
      left: 'bedroom',
      downstairs: 'bathroom'
    },
    study: {
      desc: 'There is a door to the left, stairs going up, stairs going down and a secret passage.',
      left: 'nursery',
      upstairs: 'attic',
      downstairs: 'library',
      secretpassage: 'greenhouse'
    },
    attic: {
      desc: 'There are stairs going down.',
      downstairs: 'study'
    }
  };

  return service;
};
