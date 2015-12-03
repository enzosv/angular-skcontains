(function () {
	"use strict";
	angular.module('angular-stringcontains', [])
		.factory('searchKeyGenerator', function () {
			return {
				generateSearchKey: function generateSearchKey(object, propertiesArray) {
					var searchKey = "";
					for (var i = 0; i < propertiesArray.length; i++) {
						var value = object[propertiesArray[i]];
						if (value) {
							if (typeof value === 'string') {
								searchKey += value + " ";
							} else if (Object.prototype.toString.call(value) === '[object Array]') {
								searchKey += value.join(" ") + " ";
							}
						}
					}
					return searchKey.toLowerCase();
				}
			};
		})
		.filter('stringContainsAllOf', function () {
			return function (arrayToSearch, searchTerm, stringToCheck) {
				if (!arrayToSearch) {
					return false;
				}
				return arrayToSearch.filter(function (objectToSearch) {
					if (!objectToSearch[stringToCheck]) {
						console.error("object does not contain the " + stringToCheck + " property, please create it. See https://github.com/enzosv/angular-stringcontains");
						return false;
					}
					if (searchTerm) {
						var s = searchTerm.toLowerCase()
							.split(" ");

						for (var i = 0; i < s.length; i++) {
							//immediately return false if word is not in searchKey otherwise, continue checking other words

							if (objectToSearch[stringToCheck].indexOf(s[i]) < 0) {
								return false;
							}
						}
					}
					return true;
				});
			};
		})
		.filter('stringContainsAnyOf', function () {
			return function (arrayToSearch, searchTerm, stringToCheck) {
				if (!arrayToSearch) {
					return false;
				}
				return arrayToSearch.filter(function (objectToSearch) {
					if (!objectToSearch[stringToCheck]) {
						console.error("object does not contain the " + stringToCheck + " property, please create it. See https://github.com/enzosv/angular-stringcontains");
						return false;
					}
					if (searchTerm) {
						var s = searchTerm.toLowerCase()
							.split(" ");
						for (var i = 0; i < s.length; i++) {
							//immediately return true if word is not in searchKey otherwise, continue checking other words
							if (objectToSearch[stringToCheck].indexOf(s[i]) > -1) {
								return true;
							}
						}
						return false;
					}
					return true;
				});
			};
		});
})();
