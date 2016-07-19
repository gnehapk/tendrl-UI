(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.service("poolStore", ["poolFactory", poolStore]);

    /*@ngInject*/
    function poolStore(poolFactory) {

        /* Cache the reference to this pointer */
        var store = this;

        store.getPoolList = function () {

            return poolFactory.getPoolList()
                    .then(function (poolData) {
                        return poolData;
                    });
        };

    }

})();
