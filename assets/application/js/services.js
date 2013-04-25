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




//
// CRUD API for RESTful services with URLs similar 'http://services.mysite.com/classes/Book'.
//
// e.g.   parse.get(
//				"Book",
//				123,
//				function(response){ console.log(response.toString());}
//			);
//

angular.module('fullAPI', ['ngResource', 'ng']).
factory('parseAPI', function($rootScope, $http) {
	var parseURL = "http://localhost\\:1337/";

	return {
		//Create a db object on server
		create: function(className, data, callback) {
			
			$http.post(
				parseURL+className,
				data,
				{ headers: parseHeaders }
			)
			.success(function(response) {
				forge.logging.log("added object successfully!");
				$rootScope.$apply(function() { callback(null, response); });
			})
			.error(function(response) {
				forge.logging.log("error adding object!");
				$rootScope.$apply(function() { callback("Cannot submit data!"); });
			});
		},
		//Get a db object by id
		get: function(className, objectId, callback) {

			$http.get(
				parseUrl+className+'/'+objectId,
				{ headers: parseHeaders }
			).success(function(response) {
				$rootScope.$apply(function() { callback(null, response); });
			}).error(function(response) {
				$rootScope.$apply(function() { callback(response.error || "Cannot get object "+className+"/"+objectId+"!"); });
			});
		},
		//Get a list of db objects with query
		query: function(className, query, callback) {
			var config = { headers: parseHeaders };
			if (query) config.params = { where: query };
			$http.get(
				parseUrl+className,
				config
			).success(function(response) {
				$rootScope.$apply(function() { callback(null, response); });
			}).error(function(response) {
				$rootScope.$apply(function() { callback(response.error || "Could not query "+className+"!"); });
			});
		},
		//Remove a db object
		remove: function(className, objectId, callback) {
			$http['delete']( //['delete'] to get around using delete js keyword
				parseUrl+className+'/'+objectId,
				{ headers: parseHeaders }
			).success(function(response) {
				$rootScope.$apply(function() { callback(null, response); });
			}).error(function(response) {
				$rootScope.$apply(function() { callback(response.error || "Cannot delete object "+className+"/"+objectId+"!"); });
			});
		}
	};
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