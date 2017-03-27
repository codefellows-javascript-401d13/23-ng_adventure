'use strict';

require('./scss/main.scss');

const angular = require('angular');

angular.module('zeldaGame', []);

require('./service/map-service.js');
require('./service/player-service.js');

require('./component/player-controlls/player-controlls.js');
require('./component/player-history/player-history.js');
require('./component/player-info/player-info.js');