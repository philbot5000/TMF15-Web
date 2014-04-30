'use strict';

describe('Controller: RealTimeCtrl', function () {

  // load the controller's module
  beforeEach(module('tmf15App'));

  var RealTimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RealTimeCtrl = $controller('RealTimeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
