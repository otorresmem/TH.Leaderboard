(function () {
    "use strict";

    angular
        .module("app.API")
        .factory("API_LeaderBoard", API_LeaderBoard);

    API_LeaderBoard.$inject = ["$http", "$q", "CONFIG"];

    function API_LeaderBoard($http, $q, CONFIG) {
        var leaderboardFactory = {};
        leaderboardFactory.index = 0;
        leaderboardFactory.itemsPerScreen = CONFIG.USERS_PER_SCREEN;
        leaderboardFactory.numPages = 0;
        leaderboardFactory.lastPageAmount = 0;
        leaderboardFactory.thUsers = [];
        leaderboardFactory.screenUsers = [];
        leaderboardFactory.topUsers = [];

        function TrainHeroicUser(id, image, name, rank, tests, initials) {
            this.id = id;
            this.image = image;
            this.name = name;
            this.rank = rank;
            this.tests = tests;
            this.initials = initials;
        }               

        leaderboardFactory.getCurrentResults = function () {
            if (leaderboardFactory.screenUsers.length ===0) {
                leaderboardFactory.init();
            } 
            
        };

        leaderboardFactory.nextUserResults = function () {
            
            var currentIndex = leaderboardFactory.index++;
            var lastPage = currentIndex == (leaderboardFactory.numPages);
            var floorIndex = currentIndex * leaderboardFactory.itemsPerScreen;
            var topIndex = lastPage ? (floorIndex + leaderboardFactory.lastPageAmount) : (floorIndex + leaderboardFactory.itemsPerScreen);
            leaderboardFactory.screenUsers = leaderboardFactory.thUsers.slice(floorIndex, topIndex);
            if (lastPage) {
                leaderboardFactory.init();
            }
        };
        
        leaderboardFactory.init = function () {
            var deferred = $q.defer();
            leaderboardFactory.index = 0;
            leaderboardFactory.thUsers = [];
            leaderboardFactory.thUsers.length = 0;
            leaderboardFactory.numPages = 0;
            leaderboardFactory.lastPageAmount = 0;
            $http.get(CONFIG.LEADERBOARD_API_PATH).success(function (data, status) {                
                leaderboardFactory.totalReps = data.testStats[0].cnt;
                leaderboardFactory.avg = data.testStats[0].avg.toFixed(2);
                leaderboardFactory.workoutName = data.workoutTitle;
                leaderboardFactory.workoutDate = new Date(data.date);

                angular.forEach(data.results, function (item, index) {
                    var mappedUser = new TrainHeroicUser(item.userId, item.profileImg, item.userFirstName + ' ' + item.userLastName, item.rank, item.tests[0], item.initials);
                    leaderboardFactory.thUsers.push(mappedUser);
                });
                leaderboardFactory.numPages = Math.floor(leaderboardFactory.totalReps / leaderboardFactory.itemsPerScreen);
                leaderboardFactory.lastPageAmount = leaderboardFactory.totalReps % leaderboardFactory.itemsPerScreen;
                if (leaderboardFactory.lastPageAmount > 0) leaderboardFactory.numPages++;
                leaderboardFactory.screenUsers = leaderboardFactory.thUsers.slice(0, leaderboardFactory.itemsPerScreen);//try push if the model dont get refreshed
                leaderboardFactory.topUsers = leaderboardFactory.thUsers.slice(0, 3);
                deferred.resolve(leaderboardFactory.screenUsers);
                console.log(leaderboardFactory.screenUsers);
            });
            return deferred.promise;
        };

        return leaderboardFactory;
    }

})();