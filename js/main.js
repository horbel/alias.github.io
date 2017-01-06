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


var jorneyApp = angular.module("jorneyApp", [])
    .constant('ACCESS_PARAMS', {
        APP_ID: '4f340f09',
        APP_KEY: 'f6c1a49618dca9f4bb12c9455c03d8aa'
    })

    .controller("JorneyController", ["$scope", "$http", "$timeout", "ACCESS_PARAMS", JorneyCtrl]);
function JorneyCtrl($scope, $http, $timeout, ACCESS_PARAMS) { }