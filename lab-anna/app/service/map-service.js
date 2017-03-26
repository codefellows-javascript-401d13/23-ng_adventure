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
      x: "5vwvw",
      y: "25vw"
    },
    ground:{
      desc: "Hurry up! The rain is coming!",
      left: "enterSpout",
      right: "sunnySide1",
      up: "enterSpout",
      x: "12vw",
      y: "30vw"
    },
    enterSpout: {
      desc: "Enter the spout or go around.",
      left: "ground",
      right: "sunnySide1",
      x: "15vw",
      y: "25vw"
    },
    sunnySide1: {
      desc: "You are on the right track, keep going!",
      left: "ground",
      up: "sunnySide2",
      x: "25vw",
      y: "25vw"
    },
    sunnySide2: {
      desc: "You are on the right track, keep going!",
      left: "ground",
      up: "roof",
      x: "25vw",
      y: "15vw"
    },
    roof: {
      desc: "Yay! You climbed up onto the roof! Now find the fly.",
      right: "fly",
      x: "25vw",
      y: "3vw"
    },
    fly: {
      desc: "You have found the fly, bon appetit!",
      x: "31vw",
      y: "1vw"
    }
  };
  return service;
};
