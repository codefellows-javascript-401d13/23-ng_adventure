'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};
  service.mapData = {
    web: {
      desc: "Wake up sleepy head, go get the fly!",
      right: "enterSpout"
    },
    ground:{
      desc: "Hurry up! The rain is coming!",
      left: "enterSpout",
      right: "enterSpout",
      up: "enterSpout",
      down: "enterSpout"
    },
    enterSpout: {
      desc: "Enter the spout or go around.",
      left: "ground",
      right: "sunnySide1"
    },
    sunnySide1: {
      desc: "You are on the right track, keep going!",
      left: "ground",
      up: "sunnySide2"
    },
    sunnySide2: {
      desc: "You are on the right track, keep going!",
      left: "ground",
      up: "roof"
    },
    roof: {
      desc: "Yay! You climbed up onto the roof! Now find the fly.",
      right: "fly"
    },
    fly: {
      desc: "You have found the fly, bon appetit!"
    }
  };
  return service;
};
