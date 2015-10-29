# String Contains Filter for Angular

View [example](http://enzosv.github.io/angular-skcontains/)

Angular filter for easy JSON Array searching

## Installation

To install using [Bower](http://bower.io):

```
bower install angular-skcontains
```

## Setup

In your document include this script:

```
<script src="/bower_components/angular-skcontains/angular-skcontains.js"></script>
```

In your AngularJS app, you'll need to import the `angular-skcontains` module:

```
angular.module('myModule', ['angular-skcontains']);
```

## Usage

This module defines the filters 'searchKeyContainsAllInString' and 'searchKeyContainsAnyInString'

```
<any ng-repeat="object in JSONArray | searchKeyContainsAllInString:searchTerm"></any>

<any ng-repeat="object in JSONArray | searchKeyContainsAnyInString:searchTerm"></any>
```

This filter makes use of a string property called "searchKey" which you must generate from your object like so:

```
object.searchKey = (object.name + " " + object.searchableProperty1 + " " + object.searchableProperty2).toLowerCase();
```


## License

MIT