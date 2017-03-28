'use strict';

const angular = require('angular');
const prettyBigAdventure = angular.module('prettyBigAdventure');

prettyBigAdventure.factory('mapService', ['$log', mapService]);

function mapService ($log) {
  $log.debug('mapService');

  let service = {};

  service.mapData = {
    field: {
      desc: 'You are in a pretty big field',
      north: 'cliffs',
      south: 'forest',
      east: 'foothills',
      west: 'river',
      display: require('../display/field.txt')
    },
    cliffs: {
      desc: 'You are at the cliffs. A pretty big bird flies by',
      south: 'field',
      display: require('../display/cliffs.txt')
    },
    forest: {
      desc: 'You come to a forest. It\'s pretty spooky',
      north: 'field',
      south: 'path',
      display: require('../display/forest.txt')

    },
    foothills: {
      desc: 'The terrain becomes pretty mountainous',
      west: 'field',
      display: require('../display/mountains.txt')

    },
    river: {
      desc: 'A wide, swift river',
      east: 'field',
      south: 'overlook',
      display: require('../display/river.txt')

    },
    overlook: {
      desc: 'You come to a pretty rocky overlook on a bend in the river',
      north: 'river',
      display: require('../display/overlook.txt')

    },
    path: {
      desc: 'The way is shut. There is a pretty big wizard. GAME OVER',
      display: require('../display/wizard.txt')

    }
  };

  return service;
}
