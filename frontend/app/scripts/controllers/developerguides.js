
'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DeveloperdocsCtrl
 * @description
 * # DeveloperdocsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
   .controller('DeveloperGuidesCtrl', function () {
      $('pre code').each(function(i, block) {
         hljs.highlightBlock(block);
      });
   });
