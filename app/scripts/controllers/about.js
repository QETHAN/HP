'use strict';

/**
 * @ngdoc function
 * @name hpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hpApp
 */
angular.module('hpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
