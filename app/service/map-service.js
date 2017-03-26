'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure') ;
// ^^accesses the module
ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    closet: {
      desc: 'get out of this closet',
      north: 'hallway'
    },
    hallway: {
      desc: 'you are in the school hallway',
      north: 'auditorium',
      east: 'gym',
      south: 'closet',
      west: 'lunchroom'
    },
    auditorium: {
      desc: 'you are in the the dark abandoned auditorium',
      south: 'hallway',
      east: 'office'
    },
    office: {
      desc: 'you see a zombie principal in the office, GET OUT!',
      west: 'auditorium',
    },
    gym: {
      desc: 'zombie P.E. students run toward you chanting ring around the rosies!',
      west: 'hallway',
      east: 'playground'
    },
    playground:{
      desc: 'your on the playground where there is a little girl wearing bloody clothes sitting on the swing with her head down...she notices you',
      west: 'gym',
      south: 'corridor',
      east: 'swingset',
      north: 'swingset'
    },
    swingset:{
      desc: 'you got too close! the little girl bites you with her jagged zombie teeth and digs her nails into your back!',
      south: 'ground',
    },
    ground:{
      desc: 'your on the ground wrestling the zombie girl to get her off of you. You have several zombie bites.  It may be too late if you cant get to the lunchroom in two moves',
      north: 'swingset',
      south: 'corridor'
    },
    corridor: {
      desc: '',
      north: 'playground',
      east: 'lunchroom'
    },
    lunchroom: {
      desc: 'you have eaten some cool snacks and your not going to be a zombie...maybe',
      west: 'corridor',
      east: 'hallway'
    }
  };

  return service;
}
