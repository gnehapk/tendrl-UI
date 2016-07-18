(function() {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.controller("clusterController", clusterController);

    /*@ngInject*/
    function clusterController($scope, $controller, $rootScope, clusterStore, tabManager) {

        var vm = this,
            hostVm;

        vm.getClusterList = getClusterList;
        vm.showClusterList = showClusterList;
        vm.hideClusterList = hideClusterList;
        vm.setTab = setTab;
        vm.showList = false;
        $rootScope.showNavContent = false;
        vm.activeTab = 1;

        init();

        function getClusterList() {
            clusterStore.getClusterList().then(function(data) {
                vm.clusterList = data.data;
                vm.selectedCluster = vm.clusterList[0];
                $rootScope.showNavContent = true;
                hostVm = $controller("hostController as hostVm", { $scope: $scope});
            });
        };

        function showClusterList() {
            vm.showList = !vm.showList;
        }

        function init() {
            vm.activeTab = tabManager.getActiveTab();
        }

        function setTab(tabNo) {
            tabManager.setActiveTab(2);
            vm.activeTab = tabNo;
        }

        function hideClusterList() {
            vm.showList = false;
        }
    }

})();
