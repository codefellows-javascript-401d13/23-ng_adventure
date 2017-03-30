'use strict';

require('./scss/main.scss');

const angular = require('angular');

angular.module('gollumsGame', []);

// Services
require('./service/player-service.js');
require('./service/map-service.js');

// Components
require('./component/gamepad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/game-history/game-history.js');
