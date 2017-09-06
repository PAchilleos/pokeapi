"use strict";

(function () {

    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/search");

        $stateProvider.state("search", {
            url: "/search",
            templateUrl: "app/feature/search/search.html"
        }).state("box", {
            url: "/box",
            templateUrl: "app/feature/box/box.html"
        })
    });
}());