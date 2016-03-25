'use strict';

juke.controller('Albums', function($scope, $http, $rootScope, $log , albumFactory) {

	albumFactory.fetchAll()
		.then(function(albums){
			console.log(albums);
			$scope.albums=albums;
		})

		$scope.getImageByAlbum = function(album){
			var imageUrl;
			//albumFactory.fetchById(album._id).then(function(album1){
				imageUrl ='/api/albums/' + album._id + '.image';
			//});
			return imageUrl;

			//return $scope.imageUrl;
		}



});