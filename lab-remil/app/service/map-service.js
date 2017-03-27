'use strict';

import angular from 'angular';
const swagyoselfApp = angular.module('swagyoselfApp');

swagyoselfApp.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('ng-service: map');

  let service = {};

  service.locations = {
    start: {
      msg: 'start',
      direction: 'end',
    },
    end: {
      msg: 'end',
    },
  };

  return service;
}
