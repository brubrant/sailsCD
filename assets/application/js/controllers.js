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

function EditarAlbumCtrl ($scope, $routeParams, $location, Album, ParseAPI) {
	$scope.album = Album.get({albumId: $routeParams.albumId}, function(album) {
    	//$scope.mainImageUrl = album.images[0];
  	});
	$scope.saveAlbum = function () {
		console.log('click!');
		ParseAPI.save({itemId: $routeParams.albumId });
	}
}



// function EditAlbumCtrl ($scope, $routeParams, ParseAPI) {

// 	$scope.album = ParseAPI.get({itemType: 'album', acao: 'view', itemId: $routeParams.albumId}, function(album){
// 		console.log('Resposta da api ' + album.album.toString());
// 	});
	
// 	$scope.album.save = ParseAPI.save();

	//console.log($scope.album + ' aa');





	//$scope.albumz = Geral.get('album', $routeParams.albumId, console.log() )
//}