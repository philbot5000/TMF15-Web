'use strict';

angular.module('TMF15')
.controller('AdminVenuesCtrl', ['$scope', '$modal', '$firebase', function ($scope, $modal, $firebase) {

  $scope.venues = $firebase(new Firebase('https://tmf15.firebaseio.com/venues'));
  console.log($scope.venues);

  $scope.addVenueModal = function () {
    $modal.open({
      templateUrl: 'views/admin/addVenueModal.html',
      controller: addVenueCtrl,
      scope: $scope
    });
  };

  $scope.editVenue = function (key, values) {
    $scope.venue = values;

    $modal.open({
      templateUrl: 'views/admin/addVenueModal.html',
      controller: editVenueCtrl,
      scope: $scope,
      resolve: {
        values: function() {
          return values;
        },
        key: function () {
          return key;
        }
      }
    });

  };

  $scope.removeVenue = function (key) {


      $scope.venues.$remove(key).then(function(ref) {
      //   console.log('venue removed.');
      });


  };

}]);

var addVenueCtrl = function($scope, $modalInstance, $firebase) {
  $scope.venue = '';
  $scope.venueEdit = false;
  $scope.venues = $scope.$parent.venues;

  $scope.closeVenueModal = function () {
    $modalInstance.close();
  };

  $scope.addVenue = function (venue) {
    $scope.venues.$add(venue).then(function(ref) {
      $modalInstance.close();
    });
  };

};

var editVenueCtrl = function($scope, $modalInstance, $firebase, key, values) {
  var venue = $firebase(new Firebase('https://tmf15.firebaseio.com/venues/'+key));
  $scope.venue = $scope.$parent.venue;
  $scope.venueEdit = true;

  $scope.saveVenue = function(key, values) {
    venue.$update(values).then(function() {
      $modalInstance.close();
    });
  };

  $scope.closeVenueModal = function () {
    $modalInstance.close();
  };

};
