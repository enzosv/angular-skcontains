# String Contains Filter for Angular
Angular filter for easy JSON Array filtering

View [live demo](http://enzosv.github.io/angular-stringcontains/)

## Installation
### Bower
To install using [Bower](http://bower.io):

```shell
bower install angular-stringcontains
```
### Manual
Download [angular-stringcontains.min.js](https://raw.githubusercontent.com/enzosv/angular-stringcontains/master/angular-stringcontains.min.js) and add to your project

## Setup

In your document include this script:

```html
<script src="/bower_components/angular-stringcontains/angular-stringcontains.min.js"></script>
```

In your AngularJS app, you'll need to import the `angular-stringcontains` module:

```javascript
angular.module('myModule', ['angular-stringcontains']);
```

## Usage

This module defines the filters 'searchKeyContainsAllInString' and 'searchKeyContainsAnyInString'

```html
<any ng-repeat="object in JSONArray | stringContainsAllOfString:searchTerm:'stringToCheck'"></any>

<any ng-repeat="object in JSONArray | stringContainsAnyOfString:searchTerm:'stringToCheck'"></any>
```

This filter makes use of a string property you define which you must often generate from your object like so:

```javascript
object.stringToCheck = (object.name + " " + object.searchableProperty1 + " " + object.searchableProperty2).toLowerCase();
```

## Example
View [live demo] (http://enzosv.github.io/angular-stringcontains/)

View [example source code](https://raw.githubusercontent.com/enzosv/angular-stringcontains/master/example)

###Comparison
![alt tag](https://raw.githubusercontent.com/enzosv/angular-stringcontains/master/comparison.png)

## License

MIT