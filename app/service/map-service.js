'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = [];

  service.mapData = {
    cabin: {
      desc: 'you in the cabin son',
      south: 'trail'
    },
    trail: {
      desc: 'what is happening from the trail son',
      north: 'cabin',
      east: 'gate',
      south: 'pit'
    },
    pit: {
      desc: 'YOU JUST ENDED UP IN BORATS ARMPITS DURING THE 69 SCENE WITH THE FAT GUY',
      north: 'trail'
    },
    gate: {
      desc: 'something something sexual key in gate joke',
      west: 'trail',
      east: 'castle'
    },
    castle: {
      desc: 'pimp daddy castle',
      west: 'gate',
      south: 'corridor'
    },
    corridor: {
      desc: 'imagine some weird corridor from a horror movie',
      north: 'castle',
      east: 'snackroom'
    },
    snackroom: {
      desc: 'BRING OUT THE CHOCOLATE SONNNN',
      west: 'corridor'
    }
  };

  return service;
};
