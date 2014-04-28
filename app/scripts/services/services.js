'use strict';

angular.module('services')

.service('Auth', function ($firebaseSimpleLogin) {

  var ref = new Firebase('https://tmf15.firebaseio.com');

  return {

    auth: $firebaseSimpleLogin(ref),

    logInFacebook: function() {

      return this.auth.$login('facebook');

    },
    logOut: function() {
      return this.auth.$logout();
    },
    /* This method should take a user and return the roles associated with
    ** the user.
    */
    getRoles: function(user) {


    }
  };
});
