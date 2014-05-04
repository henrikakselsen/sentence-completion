'use strict';

angular
  .module('sentenceApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/archive', {
        templateUrl: 'views/archive.html',
        controller: 'ArchiveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
