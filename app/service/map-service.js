'use strict';

const angular = require('angular');

const gollumsGame = angular.module('gollumsGame');

gollumsGame.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.coordinates = ['a1','a2','a3','a4',
                    'b1','b2','b3','b4',
                    'c1','c2','c3','c4',
                    'd1','d2','d3','d4'
                  ];

  service.mapData = {
    a1: { name: 'a1', east: 'a2', south: 'b1', hasRing: false },
    a2: { name: 'a2', east: 'a3', south: 'b2', west: 'a1', hasRing: false },
    a3: { name: 'a3', east: 'a4', south: 'b3', west: 'a2', hasRing: false },
    a4: { name: 'a4', west: 'a3', south: 'b4', hasRing: false },
    b1: { name: 'b1', north: 'a1', east: 'b2', south: 'c1', hasRing: false },
    b2: { name: 'b2', north: 'a2', east: 'b3', south: 'c2', west: 'b1', hasRing: false },
    b3: { name: 'b3', north: 'a3', east: 'b4', south: 'c3', west: 'b2', hasRing: false },
    b4: { name: 'b4', north: 'a4', south: 'c4', west: 'b3', hasRing: false },
    c1: { name: 'c1', north: 'b1', east: 'c2', south: 'd1', hasRing: false },
    c2: { name: 'c2', north: 'b2', east: 'c3', south: 'd2', west: 'c1', hasRing: false },
    c3: { name: 'c3', north: 'b3', east: 'c4', south: 'd3', west: 'c2', hasRing: false },
    c4: { name: 'c4', north: 'b4', south: 'd4', west: 'c3', hasRing: false },
    d1: { name: 'd1', north: 'c1', east: 'd2', hasRing: false },
    d2: { name: 'd2', north: 'c2', east: 'd3', west: 'd1', hasRing: false },
    d3: { name: 'd3', north: 'c3', east: 'd4', west: 'd2', hasRing: false },
    d4: { name: 'd4', north: 'c4', west: 'd3', hasRing: false }
  }
  return service;
}
