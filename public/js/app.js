var app = angular.module('wiaw', ['ngResource', 'ngRoute']);

app.controller('introCtrl', ['$scope', function ($scope) {

}]);

app.controller('theNameCtrl', ['$scope', function ($scope) {

}]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/introduction', {
                templateUrl: 'intro.html',
                controller: 'introCtrl'
            }).
            when('/thename', {
                templateUrl: 'thename.html',
                controller: 'theNameCtrl'
            }).
            when('/hosting', {
                templateUrl: 'hosting.html',
                controller: 'hostingCtrl'
            }).
            when('/wordpress', {
                templateUrl: 'wordpress.html',
                controller: 'wordpressCtrl'
            }).
            when('/content', {
                templateUrl: 'content.html',
                controller: 'contentCtrl'
            }).
            when('/theming', {
                templateUrl: 'theming.html',
                controller: 'themingCtrl'
            }).
            when('/filling', {
                templateUrl: 'filling.html',
                controller: 'fillingCtrl'
            }).
            when('/backups', {
                templateUrl: 'backups.html',
                controller: 'backupsCtrl'
            }).
            when('/finish', {
                templateUrl: 'finish.html',
                controller: 'finishCtrl'
            }).
            otherwise({
                redirectTo: '/introduction'
            });
    }]);