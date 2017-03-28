'use strict';

const angular = require('angular');

require('./scss/main.scss');

angular.module('prettyBigAdventure', []);

require('./service/map-service');
require('./service/player-service');

require('./component/player-info/player-info.js');
require('./component/game-pad/game-pad.js');
require('./component/game-history/game-history.js');
require('./component/display-window/display-window.js');
require('./component/header-bar/header-bar.js');

