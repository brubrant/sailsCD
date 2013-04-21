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
		return $resource('http://localhost\\:1337/album/view/:albumId');
	}
);