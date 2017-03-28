'use strict';

const angular = require('angular');

const prettyBigAdventure = angular.module('prettyBigAdventure');

prettyBigAdventure.component('headerBar', {
  template: require('./header-bar.html'),
  controller: 'HeaderBarController',
  controllerAs: 'headerBarCtrl'
});

prettyBigAdventure.controller('HeaderBarController', ['$log', HeaderBarController]);

function HeaderBarController ($log){
  $log.debug('HeaderBarController');

  this.title= 'It\'s a Pretty Big Adventure',
  this.routes= [
    {
      name: 'restart',
      url: '/'
    },

  ];
}
