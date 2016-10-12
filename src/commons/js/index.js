//# sourceURL=storage-management-plugin.js
(function() {
    "use strict";

    var storageModule = angular.module("StorageManagementModule", ["ui.router", "ngMaterial", "ui.bootstrap.progressbar"]);

    storageModule.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider
            .state("StorageManagement", {
                url: "/StorageManagement",
                templateUrl: "index.html",
                abstract: true
            })
            .state("dashboard", {
                url: "/dashboard",
                template: "<h1>Coming soon...</h1>"
            })
            .state("clusters", {
                url: "/clusters",
                templateUrl: "modules/clusters/clusters.html",
                controller: "clusterController",
                controllerAs: "clusterVm"
            });
    });


}());
