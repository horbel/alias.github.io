/// <reference path="../startPage.html" />
/// <reference path="../startPage.html" />
/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/jquery.touchSwipe.js" />
/// <reference path="../Scripts/jquery-1.9.1.js" />
/// <reference path="../Scripts/angular-ui-router.js" />



//$(document).ready(function () {
//    $(".word-wrapper").swipe({
//        swipeUp: function (event, direction, distance, duration) {
//            $(".word-wrapper").css("background-color", "red");
//            console.log("You swiped " + direction)
//        },
//        swipeDown: function (event, direction, distance, duration) {
//            $(".word-wrapper").css("background-color", "green");
//            console.log("You swiped " + direction)
//        },
//        click: function (event, target) {
//        },
//        threshold: 100,
//        allowPageScroll: "vertical"
//    });
//});


//angular
//       .module('app', ['ui.router', 'uiGmapgoogle-maps'])
//       .config(uiRouterConfig);

//uiRouterConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

//function uiRouterConfig($urlRouterProvider, $stateProvider) {
//    $urlRouterProvider.otherwise('/');

//    $stateProvider
//        .state('Home', {
//            url: '/',
//            templateUrl: 'templates/mainTemplate.html'
//        })
//        .state('Shop', {
//            url: '/shop/:name',
//            templateUrl: 'templates/goodsTemplate.html',
//            controller: 'ShopDetailCtrl',
//            controllerAs: 'detail'
//        })
//}





var aliasApp = angular.module("aliasApp", ['ui.router'])
    .config(uiRouterConfig) 
    .controller("startController", startCtrl);

uiRouterConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

function uiRouterConfig($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('startPage', {
        url: '',
        templateUrl: 'startPage.html',
    })
}

function startCtrl() {
    var vm = this;

    var teamObject = {
        name: "Команда",
        score: 0
    };

    vm.teams = [
        {
            name: "Команда 1",
            score: 0
        },
        {
            name: "Команда 2",
            score: 0
        }
    ];

    vm.addTeam = function () {
        var team = angular.copy(teamObject);
        team.name += " " + (vm.teams.length + 1);
        vm.teams.push(team);
    }  
}