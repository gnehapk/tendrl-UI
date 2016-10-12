(function() {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.controller("hostController", hostController);

    /*@ngInject*/
    function hostController($scope, $rootScope, $state, $stateParams, hostStore, tabManager) {

        var vm = this;

        vm.getHostList = getHostList;
        vm.activeTab = tabManager.getActiveTab();
        vm.hostList = [];

        init();

        function getHostList() {
            hostStore.getHostList().then(function(data) {
                vm.hostList = data;

                vm.loadingConfig.isLoading = false;
            });
        }

        function init() {

            vm.loadingConfig = {
                isLoading: true
            };

            if($rootScope.showNavContent === true) {
                vm.getHostList();
            }            
        }
    }

})();
