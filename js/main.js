/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/jquery.touchSwipe.js" />
/// <reference path="../Scripts/jquery-1.9.1.js" />



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


var aliasApp = angular.module("aliasApp", [])
    .controller("startController", startCtrl);
function startCtrl() {
    var vm = this;

    var teamObject = {
        name: "Команда",
        score: 0
    };

    vm.teams = [
        {
            name: "Команда",
            score: 0
        },
        {
            name: "Команда",
            score: 0
        }
    ];

    vm.addTeam = function () {
        var team = angular.copy(teamObject);
        team.name += " " + (vm.teams.length + 1);
        vm.teams.push(team);
    }  
}