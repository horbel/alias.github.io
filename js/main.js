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




var aliasApp = angular.module("aliasApp", ['ngRoute', 'swipe'])
     .config(routeConfig)
    .controller("startController", startCtrl);

//uiRouterConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

function routeConfig($routeProvider) {
    $routeProvider.when('/',
         {
             templateUrl: 'startPage.html',
             controller: 'startController'
         })
   .when('/prepare',
    {
        templateUrl: 'prepare.html',
        controller: 'startController'
    })
   .when('/game',
   {
       templateUrl: 'game.html',
       controller: 'startController'
   });
}


function startCtrl() {
    var vm = this;
    var words;
    vm.currentWord = '';
    var teamObject = {
        name: "Команда",
        score: 0
    };

    vm.teams = [
        {
            name: "Команда 1",
            score: 65
        },
        {
            name: "Команда 2",
            score: 0
        }
    ];

    vm.roundScore = {
        minus: 0,
        plus: 0
    };

    vm.addTeam = function () {
        if (vm.teams.length >= 5) {
            alert("Максимальное число команд: 5");
            return;
        }
        var team = angular.copy(teamObject);
        team.name += " " + (vm.teams.length + 1);
        vm.teams.push(team);
    }

    vm.selectWords = function selectWords() {
        $.get('words.txt', function (data) {
            //split on new lines
            words = data.split('\n');
        });
    }
    //round phase
    vm.roundStart = function (team) {
        
        var tryCount = 0;
        vm.roundScore = {
            minus: 0,
            plus: 0
        };
        getNextWord();

        vm.swipeLeft = function () {
            tryCount++;
            $('.minus').css('color', '#aaac08');
            if (tryCount % 2 == 0) {
                vm.roundScore.minus++;
                $('.minus').css('color', '#cb5858');
            }               
            getNextWord();
        };
        vm.swipeRight = function () {
            vm.roundScore.plus++;
            getNextWord();
        };                 
    }

   

    function getNextWord() {
        vm.currentWord = words[Math.floor(Math.random() * words.length)];
    }  

    vm.test = function () {
        console.log('left-angular');
    }

}