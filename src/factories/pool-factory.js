(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.factory("poolFactory", poolFactory);

    /*@ngInject*/
    function poolFactory($http, $q) {

        var getPoolListRequest;

        getPoolListRequest = {
            method: "GET",
            url: "api/pool-list.json"
        };

        function getPoolList() {
            var request = angular.copy(getPoolListRequest);

            return $http(request).then(function (response) {
                return response.data;
            });
        }

        return {
            getPoolList: getPoolList
        };
    }

}());
