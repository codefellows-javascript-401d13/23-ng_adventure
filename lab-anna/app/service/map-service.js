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
      right: "enterSpout",
      x: "5vw",
      y: "25vw"
    },
    ground:{
      desc: "Hurry up! The rain is coming!",
      left: "enterSpout",
      right: "sunnySide1",
      up: "enterSpout",
      x: "12",
      y: "30"
    },
    enterSpout: {
      desc: "Enter the spout or go around.",
      left: "ground",
      right: "sunnySide1",
      x: "15",
      y: "25"
    },
    sunnySide1: {
      desc: "You are on the right track, keep going!",
      left: "ground",
      up: "sunnySide2",
      x: "25",
      y: "25"
    },
    sunnySide2: {
      desc: "You are on the right track, keep going!",
      left: "ground",
      up: "roof",
      x: 25,
      y: 15
    },
    roof: {
      desc: "Yay! You climbed up onto the roof! Now find the fly.",
      right: "fly",
      x: "25",
      y: "3"
    },
    fly: {
      desc: "You have found the fly, bon appetit!",
      x: "31",
      y: "1"
    }
  };
  return service;
};
