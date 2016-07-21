(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.factory("osdFactory", ["$http", "serverIP", "dataStorage", osdFactory]);

    /*@ngInject*/
    function osdFactory($http, serverIP, dataStorage) {

        var getOSDListRequest;

        getOSDListRequest = {
            method: "GET",
            //url: "api/osd-list.json"
            url: serverIP + "/clusters/"
        };


        function getOSDList() {
            var request = angular.copy(getOSDListRequest);

            request.url += dataStorage.getClusterInfo().id + "/osds";

            return $http(request).then(function (response) {
                return response.data;
            });
        }

        function getOSDDetails(osd) {
            var request = angular.copy(getOSDListRequest);

            request.url += dataStorage.getClusterInfo().id + "/osds/" + osd.uuid;
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
