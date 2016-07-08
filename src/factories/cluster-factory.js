(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.factory("clusterFactory", clusterFactory);

    /*@ngInject*/
    function clusterFactory($http, $q) {

        var getClusterListRequest;

        getClusterListRequest = {
            method: "GET",
            url: "api/cluster-list.json"
        };

        function getClusterList() {
            var request = angular.copy(getClusterListRequest);

            return $http(request).then(function (response) {
                return response.data;
            });
        }

        return {
            getClusterList: getClusterList
        };
    }

}());
