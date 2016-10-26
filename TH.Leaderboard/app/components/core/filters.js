(function () {
    "use strict";

    angular
        .module("app.core")
        .filter('groupBy', function () {
            return function (items, groupedBy) {
                if (items) {
                    var finalItems = [],
                        thisGroup;
                    for (var i = 0; i < items.length; i++) {
                        if (!thisGroup) {
                            thisGroup = [];
                        }
                        thisGroup.push(items[i]);
                        if (((i + 1) % groupedBy) === 0) {
                            finalItems.push(thisGroup);
                            thisGroup = null;
                        }
                    }
                    if (thisGroup) {
                        finalItems.push(thisGroup);
                    }
                    return finalItems;
                }
            };
        });
})();