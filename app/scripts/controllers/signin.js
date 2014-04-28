'use strict';

angular.module('TMF15')

.controller('SignInCtrl', ['$rootScope', '$scope', '$modalInstance', 'Auth', function ($rootScope, $scope, $modalInstance, Auth) {

  //$scope.auth = $firebaseSimpleLogin(ref);
  $scope.signInFacebook = function() {
    var login = Auth.logInFacebook().then(
      function(user) {
        
        if(user) {
          console.log(user);
          $rootScope.currentUser = user;
          $modalInstance.close();
      }

    });


  };

}]);
