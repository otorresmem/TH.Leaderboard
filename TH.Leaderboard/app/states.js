(function () {
    // Application Level State

    angular.module("app").config([
        "$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                    .otherwise("/");

            $stateProvider
                .state("leaderboard", {
                    url: "/",
                    templateUrl: "app/components/leaderboard/leaderboardView.html",
                    controller: "LeaderboardController",
                    controllerAs: "lb",
                    resolve: {
                        users: function (API_LeaderBoard) {
                            return API_LeaderBoard.init()
                                .then(function (data) {
                                    return data;
                                }, function (e) {
                                    return [];
                                });
                        }
                    }
                });
        }
    ]);
})();