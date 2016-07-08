(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.service("hostStore", hostStore);

    /*@ngInject*/
    function hostStore($q, hostFactory) {

        /* Cache the reference to this pointer */
        var store = this;

        store.getHostList = function () {

            return hostFactory.getHostList()
                    .then(function (hostData) {
                        return hostData;
                    });
        };

    }

})();
