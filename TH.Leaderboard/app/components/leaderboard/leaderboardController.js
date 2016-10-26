(function () {
    "use strict";

    angular
        .module("app.leaderboard")
        .controller("LeaderboardController", LeaderboardController);

    LeaderboardController.$inject = ["$rootScope", "$filter", "$scope", "$timeout", "users", "CONFIG", "API_LeaderBoard"];

    function LeaderboardController($rootScope, $filter, $scope, $timeout, users, CONFIG, API_LeaderBoard) {
        var lb = this;
        lb.init = init();
        function init() {
            $scope.usersGrouped = $filter('groupBy')(API_LeaderBoard.screenUsers, 4);
            $scope.topUsers = API_LeaderBoard.topUsers;            
            $scope.workoutName = API_LeaderBoard.workoutName;
            $scope.totalReps = API_LeaderBoard.totalReps; 
            $scope.workoutDate = API_LeaderBoard.workoutDate;
            lb.average = API_LeaderBoard.avg;
        }

        lb.intervalFunction = function () {
            $scope.usersGrouped = $filter('groupBy')(API_LeaderBoard.screenUsers, 4);
            $scope.totalReps = API_LeaderBoard.totalReps;
            $scope.workoutDate = API_LeaderBoard.workoutDate;
            $scope.topUsers = API_LeaderBoard.topUsers;
            lb.average = API_LeaderBoard.avg;

            API_LeaderBoard.nextUserResults();
            $timeout(function () {
                lb.intervalFunction();
            }, CONFIG.INTERVAL)
        };
        // Kick off the interval
        lb.intervalFunction();
        
    }


})();