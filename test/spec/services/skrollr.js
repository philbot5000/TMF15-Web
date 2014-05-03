'use strict';

describe('Service: Skrollr', function () {

  // load the service's module
  beforeEach(module('tmf15App'));

  // instantiate service
  var Skrollr;
  beforeEach(inject(function (_Skrollr_) {
    Skrollr = _Skrollr_;
  }));

  it('should do something', function () {
    expect(!!Skrollr).toBe(true);
  });

});
