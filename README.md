# StringContains Filter for Angular

Angular filter for easy JSON Array searching

## Installation

To install using [Bower](http://bower.io):

```
bower install angular-string-contains-filter
```

## Setup

In your document include this script:

```
<script src="/bower_components/angular-string-contains-filter/angular-string-contains-filter.js"></script>
```

In your AngularJS app, you'll need to import the `angular-string-contains-filter` module:

```
angular.module('myModule', ['angular-string-contains-filter']);
```

## Usage

This module defines the filter 'arrayContainsAllInString'

```
<any ng-repeat="object in JSONArray | arrayContainsAllInString:searchTerm"></any>
```

This filter makes use of a string property called "searchKey" which you must generate from your object like so:

```
object.searchKey = (object.name + " " + object.searchableProperty1 + " " + object.searchableProperty2).toLowerCase();
```

## License

MIT