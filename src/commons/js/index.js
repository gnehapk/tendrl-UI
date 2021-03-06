//# sourceURL=storage-management-plugin.js
(function() {
    "use strict";

    var storageModule = angular.module("StorageManagementModule", ["ui.router", "ngMaterial", "ui.bootstrap.progressbar"]);

    storageModule.constant("serverIP", "http://10.3.15.35:9292/");

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
                template: "<h1>Coming soon...</h1>"
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
            })
            .state("osds", {
                parent: "clusters",
                url: "/osds",
                views: {
                    "clustersMenu@clusters" : {
                        templateUrl: "modules/osds/osds.html",
                        controller: "osdController",
                        controllerAs: "osdVm"
                    }
                }
            });
    });


}());
