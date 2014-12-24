'use strict';

angular.module('app', [
    'app.pages.layout',
    'app.pages.colors',
    'app.header',
    'app.tile.regular',
    'ui.router',
    'ngAnimate',
    'anim-in-out'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/layout');
    })
;