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
    .controller("startController", ["$scope", "$http", startCtrl]);
function startCtrl($scope, $http) {
    var teamForm = document.getElementById('teamForm');
    var teamCounter = 2;
    $scope.Teams = [];
    $scope.Teams[0] = {  
        name: "Команда 1",
        score: 0
    }
    $scope.Teams[1] = {
        name: "Команда 2",
        score: 0
    }
    $scope.addTeam = function () {
        teamCounter++;
        var newTeamDomElement = document.createElement('input');
        newTeamDomElement.setAttribute('class', 'form-control');
        newTeamDomElement.setAttribute('type', 'text');
        newTeamDomElement.setAttribute('ng-model', 'Teams[' + (teamCounter - 1) + '].name');    
        newTeamDomElement.setAttribute('value', 'Команда ' + teamCounter);
        var team = {
            name: "Команда " + teamCounter,
            score: 0
        };
        $scope.Teams.push(team);
        teamForm.appendChild(newTeamDomElement);
    }  
}