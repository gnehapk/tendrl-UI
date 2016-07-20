(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.service("dataStorage", dataStorage);

    /*@ngInject*/
    function dataStorage() {

        /* Cache the reference to this pointer */
        var vm = this,
            clusterInfo = {};

        vm.setClusterInfo = function(details) {
            clusterInfo.health = details.health.overall_status;
            clusterInfo.clusterName = details.name;
            clusterInfo.id = details.id;
            console.log(clusterInfo);
        };

        vm.getClusterInfo = function() {
            return clusterInfo;
        };
        
    }

})();
