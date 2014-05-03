'use strict';

angular.module('TMF15')
  .service('Skrollr', function Skrollr() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var s = skrollr.init();
    return s;

  });
