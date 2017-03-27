'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('map service');

  let service = {};

  service.mapData = {
    KungLun: {
      desc: 'You are in kung lun. The Path has opened.',
      west: 'NewYork'
    },
    NewYork: {
      desc: 'You arrive in New York you can head to Rand Tower or Coleen\' Dojo',
      north: 'RandTower',
      east: 'KungLun',
      west: 'dojo'
    },
    RandTower: {
      desc: 'You arrive at Rand Tower. The Security guards throw you out because you look like a bum.',
      south: 'NewYork'
    },
    dojo: {
      desc: 'You arrive at Coleen\'s Dojo. You show all of her students that you are the Iron Fist.',
      east: 'NewYork',
      south: 'compound'
    },
    compound: {
      desc: 'You follow Coleen to her compound. You realize that this is actually the Hand. Time to fight.',
      west: 'BikudosLair',
      east: 'dojo'
    },
    BikudosLair: {
      desc: 'You arrive and defeat Bikudo. You have saved everyone from the evil of the hand.',
      east: 'compound'
    }
  };

  return service;
}
