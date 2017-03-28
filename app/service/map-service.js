'use strict';

const angular = require('angular');
const shoppingTime = angular.module('shoppingTime');

shoppingTime.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    home: {
      desc: 'message from the home',
      south: 'bank',
      east: 'walmart',
      west: 'traffic',
      north: 'mall'
    },
    bank: {
      desc: 'You withdrew  $1000 from your checking acount ',
      north: 'home',
      east: 'walmart',
      south: 'traffic'
    },
    traffic: {
      desc: 'you are stuck in Seattle Traffic!',
      north: 'bank',
      south: 'mall'
    },
    walmart: {
      desc: 'You bought makeup, household items and other unnecessary things you dont need',
      west: 'bank',
      east: 'mall'
    },
    mall: {
      desc: 'You are looking for new clothes',
      west: 'walmart',
      south: 'JcPenny'
    },
    JcPenny: {
      desc: 'you are finished all your shopping!',
      west: 'home'
    }
  };

  return service;
}
