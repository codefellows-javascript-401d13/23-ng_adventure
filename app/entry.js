'use strict';

import './scss/main.scss';

import angular from 'angular';

angular.module('carmenSandiego', []);

require('./service/map-service.js');
require('./service/traveller-service.js');

require('./component/game-history/game-history.js');
require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
