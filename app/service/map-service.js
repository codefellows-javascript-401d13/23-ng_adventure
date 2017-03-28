'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    Hall: {
      desc: 'There is a door to the right and one to the left. There is a locked door to the outside.',
      story: 'back in the hall.',
      left: 'greenhouse',
      right: 'kitchen',
    },
    greenhouse: {
      desc: 'There is a door to the right, stairs going up and a secret passage.',
      right: 'Hall',
      upstairs: 'gameroom',
      story: 'Gary enters the greenhouse, it feels warm, moist and there are plants on every table.',
      secretpassage: 'study'
    },
    kitchen: {
      story: 'The kitchen is warm because the oven is on, it smells like bread baking.',
      desc: 'There is a door to the left, stairs going up and a secret passage, where might it go?',
      left: 'Hall',
      upstairs: 'library',
      secretpassage: 'bedroom'
    },
    library: {
      story: 'There are books scattered everywhere. Gary searches through them but does not find anything interesting.',
      desc: 'There is a door to the left, stairs going up and stairs going down.',
      left: 'bathroom',
      upstairs: 'study',
      downstairs: 'kitchen'
    },
    bathroom: {
      story: 'Gary washes his hands, looks in the mirror and sighs. Maybe the next room will be better',
      desc: 'There is a door to the left, a door to the right and stairs going up.',
      left: 'gameroom',
      right: 'library',
      upstairs: 'nursery'
    },
    gameroom: {
      story: 'There is a chessboard in the middle of the room. Gary looks at the board but gets bored.',
      desc: 'There is a door to the right, stairs going up and stairs going down.',
      right: 'bathroom',
      upstairs: 'bedroom',
      downstairs: 'greenhouse'
    },
    bedroom: {
      story: 'No time to nap though the bed looks comfy.',
      desc: 'There is a door to the right, stairs going down and a secret passage.',
      right: 'nursery',
      downstairs: 'gameroom',
      secretpassage: 'kitchen'
    },
    nursery: {
      story: 'The small crib reminds Gary of his childhood. But there is nothing helpful in here.',
      desc: 'There is a door to the right, a door to the left and stairs going down.',
      right: 'study',
      left: 'bedroom',
      downstairs: 'bathroom'
    },
    study: {
      story: 'Gary is wishing he had "studied" the house blueprint before entering',
      desc: 'There is a door to the left, stairs going up, stairs going down and a secret passage.',
      left: 'nursery',
      upstairs: 'attic',
      downstairs: 'library',
      secretpassage: 'greenhouse'
    },
    attic: {
      story: 'Gary sees something shiny on the floor. He has found the key. Now he can get out of the house.',
      desc: 'There are stairs going down.',
      downstairs: 'study',
    }
  };

  return service;
}
