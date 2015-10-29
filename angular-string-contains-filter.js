"use strict";
angular.module('angular-string-contains-filter', [])
	.filter('arrayContainsAllInString', function () {
		return function (arrayToSearch, searchTerm) {
			return arrayToSearch.filter(function (objectToSearch) {
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
	});
