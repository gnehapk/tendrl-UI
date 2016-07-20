(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.service("osdStore", ["osdFactory", osdStore]);

    /*@ngInject*/
    function osdStore(osdFactory) {

        /* Cache the reference to this pointer */
        var store = this;

        store.getOSDList = function () {

            return osdFactory.getOSDList()
                    .then(function (osdData) {
                        return osdData;
                    });
        };

        store.getOSDDetails = function() {

            return osdFactory.getOSDDetails()
                .then(function(data) {
                    return data;
                });
        };

    }

})();
