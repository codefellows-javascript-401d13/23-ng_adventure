'use strict';

import './scss/main.scss';

import angular from 'angular';
angular.module('findyokeys', []);

require('./service/map-service.js');
require('./service/playa-service.js');

require('./component/gamepad/gamepad.js');
require('./component/player/player.js');
require('./component/history/history.js');
