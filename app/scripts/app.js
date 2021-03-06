'use strict';

angular
  .module('TMF15', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'ui.bootstrap',
    'services',
    'directives.skrollr'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        loginRequired: false
      })
      .when('/artists', {
        templateUrl: 'views/artists.html',
        controller: 'ArtistCtrl',
        loginRequired: false
      })
      .when('/admin', {
        templateUrl: 'views/admin/main.html',
        controller: 'AdminCtrl',
        loginRequired: true
      })
      .when('/admin/venues', {
        templateUrl: 'views/admin/venues.html',
        controller: 'AdminVenuesCtrl',
        loginRequired: true
      })
      .when('/venues', {
        templateUrl: 'views/venues.html',
        controller: 'VenuesCtrl'
      })
      .when('/real-time', {
        templateUrl: 'views/real-time.html',
        controller: 'RealTimeCtrl'
      })
      .otherwise({
        redirectTo: '/',
        loginRequired: false
      });
  })

.run(function($rootScope, $location, $firebaseSimpleLogin, Auth) {
    //var s = skrollr.init();
    //console.log(s);
    $rootScope.auth = Auth.auth;
    // Check to see if user is logged in...
    $rootScope.auth.$getCurrentUser().then(function(user) {

      if (user) {
        //console.log(user);
        $rootScope.currentUser = user;

      } else {

        console.log('user is not logged in.');
      }
    });
});

// Define our modules here...
angular.module('services', []);
