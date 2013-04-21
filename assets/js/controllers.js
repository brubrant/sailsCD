'use strict';

/* Controllers */

function AlbumCtrl($scope) {
	
};

function HomeCtrl($scope) {
	
};

function DetalheAlbumCtrl ($scope, $routeParams, $location, Album) {
	$scope.album = Album.get({albumId: $routeParams.albumId}, function(album) {
    	//$scope.mainImageUrl = album.images[0];
  	});
    	$scope.irComprar = function() {
    		var goTo = $location.path() + '/comprar';
    		$location.path(goTo) 
    	};
}

function EditAlbumCtrl ($scope, $routeParams, ParseAPI) {
	$scope.album = ParseAPI.get({albumId: $routeParams.albumId}, function(album){
		console.log('Resposta da api ' + album.toString());
	});
	console.log($scope.album + ' aa');
}