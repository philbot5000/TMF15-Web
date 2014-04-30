'use strict';

describe('Controller: VenuesCtrl', function () {

  // load the controller's module
  beforeEach(module('tmf15App'));

  var VenuesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VenuesCtrl = $controller('VenuesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
