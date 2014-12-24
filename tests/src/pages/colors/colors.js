'use strict';

angular.module('app.pages.colors', [
    'ui.router'
    ])

    .config(function ($stateProvider) {

        $stateProvider
            .state('colors', {
                url: '/colors',
                templateUrl: 'src/pages/colors/colors.html',
                controller: 'ColorsPageCtrl'
            })
        ;
    })

    .controller('ColorsPageCtrl', function ($scope) {

    })

;