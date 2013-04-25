'use strict';

/* Services */
/* Service usado como 'mock', pega dados de arquivo JSON na pasta public */
angular.module('localServices', ['ngResource']).
    factory('Album', function($resource){
  		return $resource('albuns/:albumId.json', {}, {
    		query: {method:'GET', params:{albumId:'albuns'}, isArray:true}
  		});


	});


angular.module('APIServices', ['ngResource']).
	factory('ParseAPI', function($resource) {
		return $resource('http://localhost\\:1337/album/:itemId', { }, { } );
	});







// .factory('Geral', function($http, $rootScope) {
// 	return  {
// 		get: function(tipoItem, itemId, callback) {

// 			$http.get(
// 				'http:localhost\\:1337/'+tipoItem+'/view/'+itemId, { }
// 				).
// 				sucess(function(response) {
// 					console.log(response);
// 				}).
// 				error(function(response) {
// 					console.log('erro ' + response);
// 				})

// 		}
// 	}
// });

/// http://localhost\\:1337/album/view/:albumId

// $http('/album/view/:albumID',