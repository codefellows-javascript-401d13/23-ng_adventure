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
      desc: 'Get out of this closet',
      north: 'hallway',
      south: 'closet',
      east: 'closet',
      west: 'closet'
    },
    hallway: {
      desc: 'You are in the dark school hallway.  Find your way out of this school',
      north: 'auditorium',
      east: 'gym',
      south: 'closet',
      west: 'lunchroom'
    },
    auditorium: {
      desc: 'You are in the the dark abandoned auditorium.  Find your way out of this creepy place',
      south: 'hallway',
      east: 'office',
      west: 'auditorium',
      north: 'auditorium'
    },
    office: {
      desc: 'You see a zombie principal in the office, GET OUT!',
      west: 'auditorium',
      east: 'office',
      south: 'office',
      north: 'office'
    },
    gym: {
      desc: 'Zombie P.E. students run toward you.  These athletic zombies are moving fast! Leave the gym quickly',
      west: 'hallway',
      east: 'playground',
      north: 'gym',
      south: 'gym'
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
      north: 'corridor',
      west: 'playground',
      east: 'sandbox'
    },
    sandbox:{
      desc: 'you are stuck',
      south: 'sandbox',
      north: 'sandbox',
      west: 'sandbox',
      east: 'sandbox'
    },
    ground:{
      desc: 'your on the ground wrestling the zombie girl to get her off of you. You have several zombie bites.  It may be too late if you cant get to the lunchroom in two moves',
      north: 'swingset',
      south: 'sandbox',
      east: 'playground',
      west:'corridor',
    },
    corridor: {
      desc: '',
      north: 'playground',
      east: 'lunchroom',
      west: 'office',
      south: 'lunchroom'
    },
    lunchroom: {
      desc: 'you have eaten some cool snacks and your not going to be a zombie...maybe',
      west: 'corridor',
      east: 'hallway',
      north: 'outside',
      south: 'auditorium'
    },
    outside: {
      desc: 'you made it out of the Dark and Dead school.  You are lucky you survived.  Never return!',
      south: 'outside',
      north: 'outside',
      west: 'outside',
      east: 'outside'

    }
  };

  return service;
}
