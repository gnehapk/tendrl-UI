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

                console.log(vm.poolList);
            });
        }

        function init() {
            if($rootScope.showNavContent === true) {
                vm.getPoolList();
            }            
        }
    }

})();
