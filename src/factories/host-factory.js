(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.factory("hostFactory", hostFactory);

    /*@ngInject*/
    function hostFactory($http, $q) {

        var getHostListRequest;

        getHostListRequest = {
            method: "GET",
            url: "api/host-list.json"
        };

        function getHostList() {
            var request = angular.copy(getHostListRequest);

            return $http(request).then(function (response) {
                return response.data;
            });
        }

        return {
            getHostList: getHostList
        };
    }

}());
