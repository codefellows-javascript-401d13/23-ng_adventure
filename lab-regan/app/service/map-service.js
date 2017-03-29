'use strict';

const angular = require('angular');
const sewerRat = angular.module('sewerRat');

sewerRat.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('map service');

  let service = {};

  service.mapData = {
      street: {
        desc: 'You\'re on the street...don\'t lurk around up here!',
        down: 'pub'
      },
      pub: {
        desc: 'You\'ve found the local rat pub, stay for a brew if you\'d like',
        name: 'pub',
        north: 'gym',
        east: 'fortuneTeller',
        up: 'street'
      },
      gym: {
        desc: 'You just strutted into the gym, time to get swole, rat breh',
        south: 'pub',
        east: 'dentist'
      },
      dentist: {
        desc: 'You have arrived at the dentist\'s office',
        west: 'gym',
        north: 'pawn shop',
        up: 'dumpster'
      },
      pawnShop: {
        desc: 'Welcome to the pawn shop. Do you have anything to trade?',
        south: 'dentist',
        east: 'cafe'
      },
      cafe: {
        desc: 'You enter a cafe. Sit down, have a coffee',
        west: 'pawnShop',
        up: 'pizzaRestaurant',
        south: 'recordStore'
      },
      recordStore: {
        desc: 'You scurried into a record shop.',
        name: 'Record Store',
        north: 'cafe',
        west: 'fortuneTeller'
      },
      fortuneTeller: {
        desc: 'You have entered the fortune teller\'s murky office',
        name: 'Fortune Teller',
        west: 'pub',
        east: 'recordStore',
        up: 'treasure'
      },
      dumpster: {
        desc: 'Score! You found a dumpster! Treats-a-plenty!',
        down: 'dentist'
      },
      pizzaRestaurant: {
        desc: 'You emerged in a pizzeria! The floor is covered with food! Beware of the workers!',
        down: 'cafe'
      },
      treasure: {
        desc: 'Winner Winner!!! You found the rat treasure! Stop scavenging for a bit and enjoy the sweet bounty.',
        down: 'fortuneTeller'
      }
  };//end mapData
  return service;
};
