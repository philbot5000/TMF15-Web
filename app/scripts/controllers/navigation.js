'use strict';

angular.module('TMF15')
  .controller('Navigation', ['$rootScope', '$scope', '$location', '$modal', 'Auth', function($rootScope, $scope, $location, $modal, Auth) {

    $scope.signInForm = function () {
      var modalInstance = $modal.open({
        templateUrl: 'views/signin.html',
        controller: 'SignInCtrl'
      });
    };

    $scope.logOut = function () {
      Auth.logOut();
      $rootScope.currentUser = null;
      $location.path('/');
    };

    $scope.getClass = function(path) {
      if ($location.path().substr(0, path.length) === path) {
        return 'active';
      } else {
        return '';
      }
    };

  }]);
