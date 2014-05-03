'use strict';

angular.module('directives.skrollr', [])
  .directive('skrollr', function(Skrollr, $timeout) {
    var directiveDefinitionObject = {
      restrict: 'A',
      link: function(scope, element, attrs) {
        //var s = skrollr.init();
        //$timeout(function(){
          Skrollr.refresh();
        //}, 10)
      }
    };

    return directiveDefinitionObject;
  });
