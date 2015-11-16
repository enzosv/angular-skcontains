(function () {
	angular.module('stringcontains-example', ['angular-stringcontains'])
		.controller('ExampleController', function ($http, $scope, searchKeyGenerator) {
			console.log("loaded controller");
			$scope.movies = [];
			$http({
					method: "GET",
					url: "http://api.themoviedb.org/3/discover/movie?sorty_by=popularity.desc&page=1&api_key=c1f1dffc7e54cf903dff85893dd69b39"
				})
				.success(function (data) {

					var genres = {
						28: "Action",
						12: "Adventure",
						16: "Animation",
						35: "Comedy",
						80: "Crime",
						99: "Documentery",
						18: "Drama",
						10751: "Family",
						14: "Fantasy",
						10761: "Foreign",
						36: "History",
						27: "Horror",
						10402: "Music",
						9648: "Mystery",
						10749: "Romance",
						878: "Science Fiction",
						10770: "TV Movie",
						53: "Thriller",
						10752: "War",
						37: "Westeren"
					};
					for (var i = 0; i < data.results.length; i++) {
						var gs = [];
						for (var j = 0; j < data.results[i].genre_ids.length; j++) {
							gs.push(genres[data.results[i].genre_ids[j]]);
						}
						data.results[i].gs = gs;
						data.results[i].genres = gs.join(", ");
						data.results[i].searchKey = searchKeyGenerator.generateSearchKey(data.results[i], ["title", "release_date", "gs"]);
					}
					$scope.movies = data.results;
				})
				.error(function (error) {

				});
		});
})();
