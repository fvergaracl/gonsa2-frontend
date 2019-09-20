var app = angular.module('myApp',[]);

    app.config('$locationProvider', function($locationProvider){
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('');
    });