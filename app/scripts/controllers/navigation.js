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

  }]);
