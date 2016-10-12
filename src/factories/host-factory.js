(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.factory("hostFactory", hostFactory);

    /*@ngInject*/
    function hostFactory($http, serverIP, dataStorage) {

        var getHostListRequest;

        getHostListRequest = {
            method: "GET",
            //url: "api/host-list.json"
            url: serverIP + "/clusters/"
        };

        function getHostList() {
            var request = angular.copy(getHostListRequest);

            request.url += dataStorage.getClusterInfo().id + "/hosts";

            return $http(request).then(function (response) {
                return response.data;
            });
        }

        return {
            getHostList: getHostList
        };
    }

}());
