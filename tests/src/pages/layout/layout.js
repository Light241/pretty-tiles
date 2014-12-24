'use strict';

angular.module('app.pages.layout', [
    'ui.router'
    ])

    .config(function ($stateProvider) {

        $stateProvider
            .state('layout', {
                url: '/layout',
                templateUrl: 'src/pages/layout/layout.html',
                controller: 'LayoutPageCtrl'
            })
        ;
    })

    .controller('LayoutPageCtrl', function ($scope) {

    })

;