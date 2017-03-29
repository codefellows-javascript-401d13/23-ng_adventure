'use strict';

import angular from 'angular';
const findyokeys = angular.module('findyokeys');

findyokeys.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.locations = {
    lobby: {
      msg: 'You lost your keys at codefellows!, Find them before time runs out... You are in the lobby',
      up: 'auditorium',
      right: 'kitchen',
      left: 'hall1',
    },
    auditorium: {
      msg: 'You\'re in the auditorium but no luck',
      up: 'lobby',
      down: 'lobby',
      right: 'pingpong',
    },
    pingpong: {
      msg: 'Sweet you found the ping pong table, but no keys...',
    },
    hall1: {
      msg: 'Your in the hallway',
      up: 'classroom1',
      right: 'lobby',
      left: 'hall2',
    },
    classroom1: {
      msg: 'The classroom is full and the class said they did not see your keys',
      down: 'hall1',
    },
    classroom2: {
      msg: 'Empty classroom and empty keys',
      down: 'hall2',
    },
    hall2: {
      msg: 'Still in the hallway, still no keys',
      up: 'classroom2',
      right: 'hall1',
      down: 'bathroom',
    },
    bathroom: {
      msg: 'You\'e in the bathroom, but you found your keys!',
    },
  };

  return service;
}
