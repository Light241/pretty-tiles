'use strict';

angular.module('app', [
    'app.pages.layout',
    'app.tile.regular',
    'ui.router',
    'ngAnimate',
    'anim-in-out'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/layout');
    })
;