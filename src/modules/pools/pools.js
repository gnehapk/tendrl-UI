(function() {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.controller("poolController", poolController);

    /*@ngInject*/
    function poolController($scope, $rootScope, $state, $stateParams, poolStore, tabManager) {

        var vm = this;

        vm.getPoolList = getPoolList;
        vm.activeTab = tabManager.getActiveTab();
        vm.poolList = [];

        init();

        function getPoolList() {
            poolStore.getPoolList().then(function(data) {
                vm.poolList = data;
                vm.loadingConfig.isLoading = false;
            });
        }

        function init() {
            
            vm.loadingConfig = {
                isLoading: true
            };

            if($rootScope.showNavContent === true) {
                vm.getPoolList();
            }            
        }
    }

})();
