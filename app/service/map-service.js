'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('map service');

  let service = {};

  service.mapData = {
    dungeon: {
      desc: 'You awaken in a dark cell. You don`n know how you got here but you notice the door is unlocked',
      north: 'hall'
    },
    hall: {
      desc: 'You find yourself in a long hall. Left of Right, which will you choose',
      east: 'armory',
      west: 'library'
    },
    library: {
      desc: 'The walls are lined with books of all different sizes and bindings.',
      north: 'lounge',
      east: 'hall'
    },
    lounge: {
      desc: 'The furniture in this room has all been knocked over as if the was a brawl',
      south: 'library',
      north: 'tower'
    },
    tower: {
      desc: 'From the top of the tower you can see that gardens east of you',
      east: 'gate',
      south: 'lounge'
    },
    gate: {
      desc : 'Through the gate you see the garden, you can almsot taste freedom',
      west: 'tower',
      north: 'garden',
      east: 'lab'
    },
    armory: {
      desc : 'All different kinds of weapons line the walls. Swords, axes, maces, bows. You are too weak to grab anything',
      west: 'hall',
      north: 'kitchen'
    },
    kitchen: {
      desc: 'You search the kitchen for anything to eat. The rats have eaten everything',
      north: 'lab',
      south: 'armory',
      east: 'pantry'
    },
    pantry: {
      desc : 'Cowbebs line these once bountiful shelves',
      west: 'kitchen'
    },
    lab: {
      desc : 'Different color potions and books cover the tables. Best not to touch.',
      south: 'kitchen',
      west: 'gate'
    },
    garden: {
      desc : 'Smell the air. You are free.',
      south: 'gate'
    }
  };
  return service;
}
