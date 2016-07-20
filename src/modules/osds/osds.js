(function() {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.controller("osdController", ["$rootScope", "osdStore", "tabManager", osdController]);

    /*@ngInject*/
    function osdController($rootScope, osdStore, tabManager) {

        var vm = this;

        vm.getOSDList = getOSDList;
        vm.activeTab = tabManager.getActiveTab();
        vm.showOSDDetails = showOSDDetails;
        vm.osdList = [];

        init();

        function getOSDList() {
            osdStore.getOSDList().then(function(data) {
                vm.osdList = data;

                console.log(vm.osdList);
            });
        }

        function init() {
            if ($rootScope.showNavContent === true) {
                vm.getOSDList();
            }
        }

        function showOSDDetails(osd) {
            osdStore.getOSDDetails().then(function(data) {
                vm.selectedOSD = data;
            });

        }
    }

})();
