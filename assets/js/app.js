'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['localServices', 'APIServices']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    	when('/', {templateUrl: 'template/find/home.html', controller: 'HomeCtrl'}).
    	when('/view2', {templateUrl: 'template/find/partial2.html', controller: 'MyCtrl2'}).
    	when('/album', {templateUrl: 'template/find/albuns.html', controller: 'AlbumCtrl'}).
    	when('/album/:albumId', {templateUrl: 'template/find/album.html', controller: 'DetalheAlbumCtrl'}).
        when('/album/:albumId/comprar', {templateUrl: 'template/find/album.html', controller: 'ComprarAlbumCtrl'}).
    	when('/album/:albumId/editar', {templateUrl: 'template/find/editAlbum.html', controller: 'EditAlbumCtrl'}).
    	otherwise({redirectTo: '/'});

    // $locationProvider.html5Mode(true);

  }]);