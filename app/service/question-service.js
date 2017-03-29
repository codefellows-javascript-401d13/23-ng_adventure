'use strict';

const angular = require('angular');

const gollumsGame = angular.module('gollumsGame');

gollumsGame.factory('questionService', ['$log', questionService]);

function questionService($log) {
  $log.debug('question service');

  let service = {};

  service.questions = [
    {
      question: 'What is 2 + 2 precious? (hint use only numeric values)',
      answer: '4'
    },
    {
      question: 'What\'s taters precious? (think of sam, answer is plural, no hyphens)',
      answer: 'potatoes'
    },
    {
      question: 'Complete this sentence precious: "Stupid, --- hobbitses!"',
      answer: 'fat'
    },
    {
      question: 'What does master have, that smeagol wants? (hint: "the --------")',
      answer: 'the precious'
    },
    {
      question: 'If smeagol could be anything, what would smeagol be? (hint: "the --------")',
      answer: 'the precious'
    },
    {
      question: 'What does smeagol use, to help smeagol feel good about itself? (hint: "the --------")',
      answer: 'the precious'
    },
    {
      question: 'Here\'s a riddle precious: "This thing all things devours; Birds, beasts, trees, flowers; Gnaws iron, bites steel; Grinds hard stones to meal; Slays king, ruins town; And beats mountain down." (hint: read "The Hobbit", or google it)',
      answer: 'time'
    },
    {
      question: 'Where are we precious? (hint: in the book, which mountain range are Bilbo and Smeagol in? the ----- ---------)',
      answer: 'the misty mountains'
    },
    {
      question: 'Can you answer this riddle precious? "Alive without breath, As cold as death;Never thirsty, ever drinking; All in mail never clinking." (hint: read "The Hobbit", or google it)',
      answer: 'fish'
    },
    {
      question: 'How did smeagol get the precious, precious? (hint: "for my --------")',
      answer: 'for my birthday'
    }
  ];

  return service;
}
