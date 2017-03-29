'use strict';

const angular = require('angular');
const ngBenighted = angular.module('ngBenighted');

ngBenighted.factory('mapService', ['$log', mapService]);

function mapService($log) {
  $log.debug('map service');

  let service = {};

  service.mapData = {
    beach: {
      desc: 'You are on a sandy, barren beach.',
      north: 'jungle',
      east: 'eastBeach',
      west: 'westBeach'
    },
    westBeach: {
      desc: 'You are walking along the beach. It\'s hot the soft sand is tiring to walk through. You hear a noise above, and look up. Seagull crap lands in your left eye. As you curse, you hear the receding sounds of what sounds like a bird laughing.',
      north: 'coconutTrees',
      east: 'beach'
    },
    eastBeach: {
      desc: 'This sandy beach would be paradise if only there were some cold beverages, tasty food, and several people devoted to your well being. And modern day plumbing. And air conditioning.',
      north: 'snake',
      west: 'beach'
    },
    jungle: {
      desc: 'You have entered a thick, hot, humid jungle. You can\'t see more than 20 feet in any direction. The walking is tough and you worry about dangerous animals.',
      north: 'waterfall',
      south: 'beach',
      east: 'snake',
      west: 'coconutTrees'
    },
    waterfall: {
      desc: 'You arrive at a gorgeous waterfall. You swim in the wonderfully cool pool below, and drink from the cascading water to quench your thirst. Of course, you don\'t realize that the clean looking water is home to several species of parasites that will make your life hell, but it will be a couple of weeks until you begin to feel the effects, by which time you will either be off the island or dead. +2 hp',
      south: 'jungle',
      east: 'berries',
      west: 'steepHill',
      he: 2
    },
    snake: {
      desc: 'Ouch! Suddenly, a large, colorful snake bites your calf, probably because you just accidentally stepped on its tail. You catch a glimpse of it as it retreats quickly into the thick understory, trying to remember some snake rules... red touch yellow, kills a fellow? Or was it black touch yellow, kills a fellow? Or was it black touch red, you are dead? Crap... You wait a few minutes - your leg swells and is tender and painful, but don\'t seem to be dead so you continue limping along. -2 hp',
      north: 'berries',
      south: 'eastBeach',
      west: 'jungle',
      he: -2
    },
    berries: {
      desc: 'In this tropical thicket, you find some berries. They look an awful lot like raspberries, though you have no idea whether they are poisonous or not, you decide to eat them because you need energy. They taste amazing, and don\'t kill you. Good job! +2 hp',
      north: 'lake',
      south: 'snake',
      east: 'northBeach',
      west: 'waterfall',
      he: 2
    },
    northBeach: {
      desc: 'You are on a gorgeous beach. You look down, and you see what appear to be human footprints heading north.',
      north: 'house',
      west: 'berries'
    },
    house: {
      desc: 'You can\'t believe your eyes. There is a small, well kept house at the edge of a beach. You walk toward it, as if in a dream, hoping it is not some sort of cruel trick of your mind. But it is not! It turns out that this is Harrison Ford\'s vacation home, and he is here. He calls a boat for you from a nearby larger island, and soon you are on your way home to recover from your "vacation!"',
      he: 'end'
    },
    chickens: {
      desc: 'You hear some sort of avian cacaphony ahead. Curious, you walk toward the noise. An unexpected sight greets you - several chickens running around, pecking at each other. They are a confusing sight on this desolate island, but you don\'t spend too long pondering the why and start thinking about the how. You are too tired and hungry to chase them, but you do find and eat some chicken eggs, which give you a much needed boost. +2 hp',
      south: 'lake',
      he: 2
    },
    lake: {
      desc: 'A lake blocks your way. You explore walking around it, but the way is blocked by impenetrable vegetation, so you decide to swim across, hoping you won\'t encounter anything that will try to eat you or poison you. Despite your worries, your swim is peaceful and soon over.',
      south: 'berries',
      east: 'house'
    },
    coconutTrees: {
      desc: 'You find yourself in a grove of coconut trees. Not that you are a expert on tropical trees, but you do recognize the roughly spherical, hairy, brown coconuts that litter the ground below them. To your delight, some of them are still whole. After some experimentation, you are able to break them open. Mmmmm... delicious coconut milk and meat are your reward. +2hp',
      north: 'steepHill',
      south: 'westBeach',
      east: 'jungle',
      west: 'rocky',
      he: 2
    },
    steepHill: {
      desc: 'You are on a steep hillside. The thick tree cover and understory do not allow you to see very far above, below, or to the side. On the bright side, nothing is trying to kill or eat you at the moment.',
      north: 'mountaintop',
      south: 'coconutTrees',
      east: 'waterfall',
      west: 'stream'
    },
    mountaintop: {
      desc: 'You find yourself out of the trees that seem to occupy most of this island, on top of a mountain. You can see in all directions. As you look around, you squint at an unexpected sight. It\'s too far to see clearly, but directly to the east of you (according to the trusty compass on your jacket zipper that you have been using all this time), there is something that looks like a human made structure. Maybe a roof?',
      north: 'cliff',
      south: 'steepHill',
      west: 'ants'
    },
    cliff: {
      desc: 'The vegetation gets even thicker. You push your way through it, being able to see nothing of what awaits you ahead. Consequently, you don\'t see the 300 foot tall cliff until you suddenly push through the last of the vegetation and fall off it, plummeting to a spectacular and blessedly quick death.',
      he: 'all'
    },
    westCliff: {
      desc: 'You freak out at the ants biting and covering your body, including your face. You run blindly, desperately trying to get away. Consequently, you don\'t see the 300 foot tall cliff until you suddenly push through the last of the vegetation and fall off it, plummeting to a spectacular and blessedly quick death. On the bright side, the ants still on you also die, drowning in the waves breaking at the base of the cliff.',
      he: 'all'
    },
    ants: {
      desc: 'AAAAARGGGGGHHHHHH!!!! You were just minding your own business, when suddenly you discover that ants, many, many ants, are crawling up your legs. Soon, your entire body is covered, and you realize with horror that they are bighting ants. You feel painful stings all over your body. Perhaps you should flee? -2 hp',
      north: 'westCliff',
      south: 'stream',
      east: 'mountaintop',
      he: -2
    },
    stream: {
      desc: 'You wade in a cool, soothing stream, enjoying the peace and quiet. You drink some water to quench your thirst. +2 hp',
      north: 'ants',
      south: 'rocky',
      east: 'steepHill',
      west: 'shore',
      he: 2
    },
    rocky: {
      desc: 'The terrain here is mostly big rocks. You walk carefully, but the rocks are slick. You slip and sprain your ankle, but gamely limp on. -2 hp',
      north: 'stream',
      east: 'coconutTrees',
      west: 'lava',
      he: -2
    },
    lava: {
      desc: 'Near the shoreline, you discover that there is an underwater volcano spewing lava onto the island. Unfortunately, you discover it by leaning your left hand into some not entirely cooled lava. The burn hurts and you have no way to treat it, so it is likely get infected if you don\'t find help soon. -2 hp',
      north: 'shore',
      east: 'rocky',
      he: -2
    },
    shore: {
      desc: 'You arrive at a rocky shoreline, watching the waves break below you. There is nothing to help you here.',
      south: 'lava',
      east: 'stream'
    }
  };

  return service;
}
