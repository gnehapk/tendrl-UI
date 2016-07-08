(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.service("clusterStore", clusterStore);

    /*@ngInject*/
    function clusterStore($q, clusterFactory) {

        /* Cache the reference to this pointer */
        var store = this;

        store.getClusterList = function () {

            return clusterFactory.getClusterList()
                    .then(function (clusterData) {
                        return clusterData;
                    });
        };

    }

})();
