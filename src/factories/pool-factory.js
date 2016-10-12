(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.factory("poolFactory", ["$http", "serverIP", "dataStorage", poolFactory]);

    /*@ngInject*/
    function poolFactory($http, serverIP, dataStorage) {

        var getPoolListRequest;

        getPoolListRequest = {
            method: "GET",
            //url: "api/pool-list.json"
            url: serverIP + "/clusters/"
        };

        function getPoolList() {
            var request = angular.copy(getPoolListRequest);

            request.url += dataStorage.getClusterInfo().id + "/pools";

            return $http(request).then(function (response) {
                return response.data;
            });
        }

        return {
            getPoolList: getPoolList
        };
    }

}());
