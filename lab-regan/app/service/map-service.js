'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('map service');

  let service = {};

  service.mapData = {
      street1: {
        desc: 'message from the street',
        down: 'sewer pub'
      },
      pub: {
        desc: 'message from the pub',
        north: 'sewer gym',
        east: 'fortuneTeller'
      },
      gym: {
        desc: 'message from the gym',
        south: 'sewer pub',
        east: 'sewer dentist'
      },
      dentist: {
        desc: 'message from the rat dentist',
        west: 'rat gym',
        north: 'pawn shop',
        up: 'street dumpster'
      },
      pawnShop: {
        desc: 'message from rat pawn shop',
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
        down: 'fortuneTeller'
      }
  };//end mapData
  return service;
};
