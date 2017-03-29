'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    cellA: {
      desc: "You awake in a dark room. You are handcuffed to a radiator. As you sit up, you become aware of your splitting headache. It feels like a couple of monkeys fighting over a jar of marbles. Now, what do do about your handcuff predicament? Luckily for you, you're paranoid and you have a handcuff key hidden in your beard for just this situation. You get up and as you look around, there is only one exit to the east. Looks like that's the place to go next.",
      east: "hallA"
    },
    cellB: {
      desc: "You are in cell B. It's the same as your cell except for a poster on the wall. You tear the poster down to find a map drawn on the back. You take it with you. (to veiw the map, go here: https://github.com/William-Skelton/23-ng_adventure/blob/master/lab-will/map.txt)",
      south: "hallA"
    },
    cellC: {
      desc: "Cell C",
      west: "hallA"
    },
    cellD: {
      desc: "Cell D",
      east: "hallD"
    },
    cellF: {
      desc: "Cell F",
      north: "hallD"
    },
    cellG: {
      desc: "Cell G",
      east: "hallH"
    },
    hallA: {
      desc: "Hallway-A",
      north: "cellB",
      east: "cellC",
      south: "hallB",
      west: "cellA"
    },
    hallB: {
      desc: "Hallway-B",
      north: "hallA",
      south: "hallC"
    },
    hallC: {
      desc: "Hallway-C",
      north: "hallB",
      south: "hallD"
    },
    hallD: {
      desc: "Hallway-D",
      north: "hallC",
      east: "hallE",
      south: "cellF",
      west: "cellD"
    },
    hallE: {
      desc: "Hallway-E",
      east: "hallF",
      west: "hallD"
    },
    hallF: {
      desc: "Hallway-F",
      south: "hallG",
      west: "hallE"
    },
    hallG: {
      desc: "Hallway-G",
      north: "hallF",
      south: "hallH"
    },
    hallH: {
      desc: "Hallway-H",
      north: "hallG",
      east: "exit",
      west: "cellG"
    },
    exit: {
      desc: "You Win!"
    }
  };

  return service;
};
