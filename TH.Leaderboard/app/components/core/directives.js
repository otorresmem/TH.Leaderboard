(function () {
    "use strict";

    angular
        .module("app.core")
        .directive('heroicUser', function () {
            return {
                restrict: 'E',                
                templateUrl: 'app/components/templates/HeroicUser.html',
                scope: { user: '=userData' }                
            }
        }).directive('heroicTopUser', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/templates/HeroicTopUser.html',
                scope: { user: '=userData' }                
            }
        }).directive('fadeIn', function ($timeout) {
            return {
                restrict: 'A',
                link: function ($scope, $element, attrs) {
                    $element.addClass("ng-hide-remove");
                    $element.on('load', function () {
                        $element.addClass("ng-hide-add");
                    });
                }
            };
        });
})();