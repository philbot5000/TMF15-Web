'use strict';

angular.module('TMF15')
  .controller('RealTimeCtrl', function ($scope, $firebase) {
    $scope.venues = $firebase(new Firebase('https://tmf15.firebaseio.com/venues'));

  });
