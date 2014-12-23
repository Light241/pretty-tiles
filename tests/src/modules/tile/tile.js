'use strict';

angular.module('app.tile.regular', [])
    .directive('regularTile', function () {
        return {
            restrict: 'E',
            scope: {
                settings: '='
            },
            templateUrl: 'src/modules/tile/regular_tile.html',
            controller: function ($scope) {

            }
        };
    })
;