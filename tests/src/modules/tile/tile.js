'use strict';

angular.module('app.tile.regular', [])
    .directive('regularTile', function () {

        var lorem = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, nisl nec faucibus vestibulum, leo leo pulvinar augue, at aliquet quam dui sit amet tellus. Proin pretium justo convallis, scelerisque neque eget, rhoncus neque. Sed venenatis pharetra vestibulum. Duis nulla ligula, congue at nulla at, euismod dictum tortor. Curabitur ac pulvinar nisl, a mollis lacus. Aenean interdum libero ut mattis dignissim. Suspendisse vulputate urna sed consectetur egestas. Nunc vel purus justo. Vivamus vitae sagittis lorem. Proin dapibus vestibulum orci malesuada tristique. Sed posuere felis at nulla congue lacinia id id dui. Vestibulum sodales ut augue id tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin convallis orci id ultrices lacinia. Suspendisse blandit, erat et posuere posuere, leo turpis rhoncus metus, nec porta odio nisl id orci.";

        function _resolveMarked($scope) {
            if ($scope.marked) {
                var marked = $scope.marked.split(' ');
                for (var i = 0; i < marked.length; i++) {
                    $scope.properties.push('Marked ' + marked[i]);
                }
            }
        }

        function _resolveButtons($scope) {
            if ($scope.buttons) $scope.properties.push('Buttons (' + $scope.buttons + ')');
        }

        function _resolveDialogButtons($scope) {
            if ($scope.dialogButtons) $scope.properties.push('Dialog Buttons (' + $scope.dialogButtons + ')');
        }

        function _resolveClasses($scope) {
            if ($scope.tileClasses) {
                var tileClasses = $scope.tileClasses.split(' ');
                for (var j = 0; j < tileClasses.length; j++) {
                    $scope.properties.push(tileClasses[j]);
                }
            }
        }

        function _resolveBodyClasses($scope) {
            if ($scope.tBodyClasses) {
                var tBodyClasses = $scope.tBodyClasses.split(' ');
                for (var k = 0; k < tBodyClasses.length; k++) {
                    $scope.properties.push(tBodyClasses[k]);
                }
            }
        }

        function _resolveCap($scope) {
            if ($scope.cap) {
                $scope.properties.push('Cap');
            }
        }

        function _resolveLabel($scope) {
            if ($scope.label) {
                $scope.properties.push('Label');
            }
        }

        return {
            restrict: 'E',
            scope: {
                tileClasses: '@',
                tBodyClasses: '@',
                buttons: '@',
                dialogButtons: '@',
                marked: '@',
                textLimit: '@',
                cap: '@',
                label: '@'
            },
            replace: true,
            templateUrl: 'src/modules/tile/regular_tile.html',
            controller: function ($scope) {
                $scope.lorem = lorem;
                $scope.properties = [];

                _resolveButtons($scope);
                _resolveDialogButtons($scope);
                _resolveMarked($scope);
                _resolveClasses($scope);
                _resolveBodyClasses($scope);
                _resolveCap($scope);
                _resolveLabel($scope);

                $scope.makeArr = function (size) {
                    return new Array(+size);
                }

            }
        };
    })
;