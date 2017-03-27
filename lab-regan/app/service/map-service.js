'use strict';

const angular = require('angular');
const sewerRat = angular.module('sewerRat');

sewerRat.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('map service');

  let service = {};

  service.mapData = {
      street: {
        desc: 'message from the street',
        down: 'pub'
      },
      pub: {
        desc: 'message from the pub',
        north: 'gym',
        east: 'fortuneTeller',
        up: 'street'
      },
      gym: {
        desc: 'message from the gym',
        south: 'pub',
        east: 'dentist'
      },
      dentist: {
        desc: 'message from the dentist',
        west: 'gym',
        north: 'pawn shop',
        up: 'dumpster'
      },
      pawnShop: {
        desc: 'message from pawn shop',
        south: 'dentist',
        east: 'cafe'
      },
      cafe: {
        desc: 'message from the cafe',
        west: 'pawnShop',
        up: 'pizzaRestaurant',
        south: 'recordStore'
      },
      recordStore: {
        desc: 'message from the record store',
        north: 'cafe',
        west: 'fortuneTeller'
      },
      fortuneTeller: {
        desc: 'message from the fortuneTeller',
        west: 'pub',
        east: 'recordStore',
        up: 'treasure'
      },
      dumpster: {
        down: 'dentist'
      },
      pizzaRestaurant: {
        down: 'cafe'
      },
      treasure: {
        desc: 'Winner Winner!!! You found the rat treasure! Stop scavenging for a bit and enjoy the sweet bounty.',
        down: 'fortuneTeller'
      }
  };//end mapData
  return service;
};
