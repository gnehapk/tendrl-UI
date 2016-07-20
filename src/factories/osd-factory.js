(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.factory("osdFactory", ["$http", "serverIP" ,osdFactory]);

    /*@ngInject*/
    function osdFactory($http, serverIP) {

        var getOSDListRequest,
            getOSDDetailsRequest;

        getOSDListRequest = {
            method: "GET",
            url: "api/osd-list.json"
        };

        getOSDDetailsRequest = {
            method: "GET",
            url: "api/osd.json"
        };

        function getOSDList() {
            var request = angular.copy(getOSDListRequest);

            return $http(request).then(function (response) {
                return response.data;
            });
        }

        function getOSDDetails() {
            var request = angular.copy(getOSDDetailsRequest);

            return $http(request).then(function (response) {
                return response.data;
            });
        }

        return {
            getOSDList: getOSDList,
            getOSDDetails: getOSDDetails
        };
    }

}());
