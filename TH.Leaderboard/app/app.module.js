(function () {
    "use strict";

    angular.module("app", [
        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        "app.core",


        /*
         * Feature areas
         */
        "app.API",
        "app.leaderboard"
    ]).run(['$rootScope', '$stateParams', '$state', 'API_LeaderBoard',
    function ($rootScope, $stateParams, $state, API_LeaderBoard) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        
    }]);
})();