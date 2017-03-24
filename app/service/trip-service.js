'use strict';

import angular from 'angular';
const weekendGetaway = angular.module('weekendGetaway');

weekendGetaway.factory('tripService', ['$log', tripService]);

function tripService($log) {
  $log.debug('tripService');

  let service = {};

  service.tripData = {

  };

  return service;
}
