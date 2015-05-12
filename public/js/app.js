var app = angular.module('wiaw', ['ngResource', 'ngRoute']);

app.controller('introCtrl', ['$scope', function ($scope) {

}]);

app.controller('theNameCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.model = {
        keywords: ''
    };

    $scope.searchDomain = function() {
        // Build the url for domain suggestions
        var url = 'http://www.domainsbot.com/d/' + $scope.model.keywords;

        var confirm = window.confirm('You will be redirected to a domain suggestion site. ' +
            'Once you have picked a domain please return here to continue.');
        if(confirm) {
            $window.open(url);
        }
    }
}]);

app.controller('hostingCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.model = {
        hostingPurchased: false
    };

    $scope.buyHosting = function() {
        var url = 'https://checkout.hostgator.com/signup/shared/29/24/websiteinaweekend';

        var confirm = window.confirm('You will be redirected to HostGator. ' +
            'Once you have purchased hosting please return here to continue.');
        if(confirm) {
            $window.open(url);
            $scope.model.hostingPurchased = true;
        }
    }
}]);

app.controller('namecheapCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.model = {
        domainPurchased: false,
        domain: ''
    };

    $scope.buyDomain = function() {
        if($scope.model.domain == '') {
           alert('Please enter a valid domain name. Ex: domainname.com');
            return;
        }

        $scope.model.domain = $scope.model.domain.replace('https://', '');
        $scope.model.domain = $scope.model.domain.replace('http://', '');
        $scope.model.domain = $scope.model.domain.replace('www.', '');

        var url = 'https://www.namecheap.com/domains/registration/results.aspx?domain=' + $scope.model.domain;

        var confirm = window.confirm('You will be redirected to NameCheap. ' +
            'Once you have purchased your domain please return here to continue.');
        if(confirm) {
            $window.open(url);
            $scope.model.domainPurchased = true;
        }
    }
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
            when('/namecheap', {
                templateUrl: 'namecheap.html',
                controller: 'namecheapCtrl'
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