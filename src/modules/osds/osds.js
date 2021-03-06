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
        vm.toggleJournalBlock = toggleJournalBlock;
        vm.toggleDomainBlock = toggleDomainBlock;
        vm.selectOSDCriteria = selectOSDCriteria;
        vm.osdList = [];
        vm.showJournalDetails = false;
        vm.showDomainDetails = true;

        init();

        function getOSDList() {
            osdStore.getOSDList().then(function(data) {
                vm.osdList = data;
                vm.selectionMode = "utilisation";
                vm.showOSDDetails(vm.osdList[0]);

                vm.loadingConfig.isLoading = false;
            });
        }

        function init() {

            vm.loadingConfig = {
                isLoading: true
            };

            if ($rootScope.showNavContent === true) {
                vm.getOSDList();
            }
        }

        function selectOSDCriteria(mode) {
            vm.selectionMode === mode;
        }

        function toggleJournalBlock() {
            vm.showJournalDetails = !vm.showJournalDetails;
        }

        function toggleDomainBlock() {
            vm.showDomainDetails = !vm.showDomainDetails;
        }

        function showOSDDetails(osd) {
            osdStore.getOSDDetails(osd).then(function(data) {
                vm.selectedOSD = data;
                _createOSDStatus();
            });

        }

        function _createOSDStatus() {
            var status = "";

            if(vm.selectedOSD.state[0] === "exists" && vm.selectedOSD.state[1] === "up") {
                status = "up-in";
            } else if(vm.selectedOSD.state[0] === "!exists" && vm.selectedOSD.state[1] === "up") {
                status = "up-out";
            } else if(vm.selectedOSD.state[0] === "exists" && vm.selectedOSD.state[1] === "!up") {
                status = "down-in";
            } else if(vm.selectedOSD.state[0] === "!exists" && vm.selectedOSD.state[1] === "!up") {
                status = "down-out";
            }

            vm.selectedOSD.status = status;
        }
    }

})();
