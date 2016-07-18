//# sourceURL=storage-management-plugin.js
(function() {
    "use strict";

    var storageModule = angular.module("StorageManagementModule", ["ui.router", "ngMaterial"]);

    storageModule.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider
            .state("StorageManagement", {
                url: "/StorageManagement",
                templateUrl: "index.html",
                abstract: true
            })
            .state("dashboard", {
                url: "/dashboard",
                template: "<h1>To be coming soon...</h1>"
            })
            .state("clusters", {
                url: "/clusters",
                templateUrl: "modules/clusters/clusters.html",
                controller: "clusterController",
                controllerAs: "clusterVm"
            })
            .state("hosts", {
                parent: "clusters",
                url: "/hosts",
                views: {
                    "clustersMenu@clusters" : {
                        templateUrl: "modules/hosts/hosts.html",
                        controller: "hostController",
                        controllerAs: "hostVm"
                    }
                }
            })
            .state("overview", {
                parent: "clusters",
                url: "/overview",
                views: {
                    "clustersMenu@clusters" : {
                        templateUrl: "modules/overview/overview.html",
                        controller: "overviewController",
                        controllerAs: "overviewVm"
                    }
                }
            })
            .state("pools", {
                parent: "clusters",
                url: "/pools",
                views: {
                    "clustersMenu@clusters" : {
                        templateUrl: "modules/pools/pools.html",
                        controller: "poolController",
                        controllerAs: "poolVm"
                    }
                }
            });
    });


}());
