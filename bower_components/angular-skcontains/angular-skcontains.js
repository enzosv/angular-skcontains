"use strict";
angular.module('angular-skcontains', [])
	.filter('searchKeyContainsAllInString', function () {
		return function (arrayToSearch, searchTerm) {
			return arrayToSearch.filter(function (objectToSearch) {
				if (!objectToSearch.searchKey) {
					console.error("object does not contain searchKey, please create it. See https://github.com/enzosv/angular-skcontains");
					return false;
				}
				if (searchTerm) {
					var s = searchTerm.toLowerCase()
						.split(" ");
					for (var i = 0; i < s.length; i++) {
						//immediately return false if word is not in searchKey otherwise, continue checking other words

						if (objectToSearch.searchKey.indexOf(s[i]) < 0) {
							return false;
						}
					}
				}
				return true;
			});
		};
	})
	.filter('searchKeyContainsAnyInString', function () {
		return function (arrayToSearch, searchTerm) {
			return arrayToSearch.filter(function (objectToSearch) {
				if (!objectToSearch.searchKey) {
					console.error("object does not contain searchKey, please create it. See https://github.com/enzosv/angular-skcontains");
					return false;
				}
				if (searchTerm) {
					var s = searchTerm.toLowerCase()
						.split(" ");
					for (var i = 0; i < s.length; i++) {
						//immediately return true if word is not in searchKey otherwise, continue checking other words
						if (objectToSearch.searchKey.indexOf(s[i]) > -1) {
							return true;
						}
					}
					return false;
				}
				return true;
			});
		};
	});
