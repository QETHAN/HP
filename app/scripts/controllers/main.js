'use strict';

/**
 * @ngdoc function
 * @name hpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hpApp
 */
angular.module('hpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
