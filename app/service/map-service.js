'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    cabin: {
      desc: 'message from the cabin',
      south: 'trail'
    },
    trail: {
      desc: 'message from the trail',
      north: 'cabin',
      east: 'gate',
      south: 'pit'
    },
    pit: {
      desc: 'you are sutck in a pit- sucks to be you, for reals',
      north: 'trail'
    },
    gate: {
      desc: 'you have have walked up to an iron gate. There are 3 locks.'
      west: 'trail',
      east: 'castle'
    },
    castle: {
      desc: 'message from the castle',
      west: 'gate',
      south: 'corridor'
    },
    corridor: {
      desc: 'message from the corridor',
      north: 'castle',
      east: 'snackroom'
    },
    snackroom: {
      desc: 'you have found the scooby snacks!',
      west: 'corridor'
    }
  };
  return service;
};
