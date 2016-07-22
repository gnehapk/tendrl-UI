(function () {
    "use strict";

    var app = angular.module("StorageManagementModule");

    app.directive("loadingIcon", loading);

    /*@ngInject*/
    function loading() {

        return {
            restrict: "E",
            name: "Loading",

            scope: {
                config: "=?",
                emitId: "@id"
            },

            replace: true,
            transclude: false,

            controller: ["$scope", function ($scope) {

                var emitSignature = "ui:loading";

                if ($scope.emitId) {
                    emitSignature = emitSignature + ":" + $scope.emitId;
                }

                var defaultConfig = {
                    label: "",
                    target: "",
                    shield: "dark",
                    shieldBlur: false,
                    isLoading: false,
                    isDone: false,
                    animation: "spin"
                };

                var checkTarget = function () {
                    if ($scope.config.target) {
                        var $target = angular.element($scope.config.target);
                        $target.append($scope.element);
                        if ($scope.config.isLoading) {
                            $target.addClass("has-loading");
                            if ($scope.config.shieldBlur) {
                                $target.addClass("shield-blur");
                            } else {
                                $target.removeClass("shield-blur");
                            }
                        } else {
                            $target.removeClass("has-loading shield-blur");
                        }
                    }
                };

                var init = function () {
                    $scope.config = $.extend(true, angular.copy(defaultConfig), $scope.config);
                    checkTarget();
                };

                $scope.cancelLoading = function () {
                    $scope.config.isLoading = false;
                };

                init();

                $scope.$watch(function () {
                    return $scope.config;
                }, function (newVal, oldVal) {
                    if (newVal !== oldVal) {
                        $scope.config = $.extend(true, angular.copy(defaultConfig), $scope.config);
                        checkTarget();
                    }
                },
                    true
                );

            }],

            template: "" +
                "<div class='loading loading-outer loading-shield-{{config.shield}}' ng-show='config.isLoading' ng-class='{\"loading-done\": config.isDone, \"loading-shield\": config.target}'>" +
                "   <div class='loading-inner {{config.animation}}'>" +
                "       <div class='block-1'></div>" +
                "       <div class='block-2' ng-if='config.animation == \"pulse\"'></div>" +
                "       <div class='block-3' ng-if='config.animation == \"pulse\"'></div>" +
                "       <div class='block-4' ng-if='config.animation == \"pulse\"'></div>" +
                "       <div class='block-5' ng-if='config.animation == \"pulse\"'></div>" +
                "       <div class='loading-text' ng-if='config.label'>{{config.label}}</div>" +
                "       <div class='loading-cancel' ng-if='config.allowCancel' ng-click='cancelLoading()''><span>&times;</span></div>" +
                "    </div>" +
                "</div>",

            // Params - scope, element, attrs
            link: function (scope, element) {
                scope.element = element;
            }
        };
    }

}());
