'use strict';

angular.module('app', [
    'ngRoute'
])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {templateUrl: 'tests/src/pages/layout/layout.html'})
            .when('/layout', {templateUrl: 'tests/src/pages/layout/layout.html'})
            .when('/colors', {templateUrl: 'tests/src/pages/colors/colors.html'})
    })
;
