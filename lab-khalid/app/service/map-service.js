'use strict';

const
  angular = require('angular'),
  zeldaGame = angular.module('zeldaGame');

zeldaGame.factory('mapService', ['$log', mapService]);


function mapService($log){
  $log.debug('map service');

  let service = {};

  service.mapData = {
    home: {
      img: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj_xvCxzPXSAhVM9GMKHe1dDh0QjRwIBw&url=http%3A%2F%2Fwww.mrwallpaper.com%2Fview%2FHouse-Winter-Cartoon-1600x1200%2F&bvm=bv.150729734,d.cGc&psig=AFQjCNH5pjXS43I2qSKZGZCn4l3l6PMo7A&ust=1490666696171093',
      desc: 'Get out of your house and do something!',
      north: 'mountain',
      south: 'valley'
    },
    mountain: {
      img: 'http://www.rockthe3d.com/wp-content/uploads/2015/03/Mountain-High-Detaled-free-3d-model-vue-e1426686435692-640x343.jpg',
      desc: 'Message from the mountain',
      south: 'home'
    },
    valley: {
      img: 'https://www.technobuffalo.com/wp-content/uploads/2016/06/Legend-of-Zelda-Breath-of-the-Wild-Artwork-09.jpg',
      desc: 'Message from the valley',
      north: 'home',
      east: 'swamp',
      west: 'bridge'
    },
    swamp: {
      img: 'http://s.storage.akamai.coub.com/get/b109/p/coub/simple/cw_timeline_pic/965fb75a005/14b04bcc7eaca3a713b98/big_1473748013_image.jpg',
      desc: 'Message from the swamp',
      west: 'valley'
    },
    bridge: {
      desc: 'Message from the bridge',
      east: 'valley',
      west: 'castle'
    },
    castle: {
      desc: 'Message from the castle',
      east: 'bridge'
    }
  };

  return service;

}
