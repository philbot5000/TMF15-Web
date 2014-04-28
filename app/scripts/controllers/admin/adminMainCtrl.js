'use strict';

angular.module('TMF15')
.controller('AdminCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.goTo = function(path) {
    $location.path('/admin/'+path);
  };

}]);
