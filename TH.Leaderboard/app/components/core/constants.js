/* global toastr:false, moment:false */
(function () {
    "use strict";

    angular
        .module("app.core")
        .constant("CONFIG", {
            LEADERBOARD_API_PATH: "https://apis.trainheroic.com/public/leaderboard/468425",
            USERS_PER_SCREEN: 16,
            INTERVAL: 4000
        });

})();