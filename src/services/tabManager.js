(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.service("tabManager", tabManager);

    /*@ngInject*/
    function tabManager() {

        /* Cache the reference to this pointer */
        var vm = this,
            activeTab = 1;

        var tabInfo = [{
            number: 1,
            title: "overview"
        }, {
            number: 2,
            title: "hosts"
        }, {
            number: 3,
            title: "pools"
        }];

        vm.setActiveTab = function(tabNo) {
            activeTab = tabNo;
        };

        vm.getActiveTab = function() {
            return activeTab;
        };
        
    }

})();
