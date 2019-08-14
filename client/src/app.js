

    var app = angular.module('app', ['ngRoute', 'angular-loading-bar', 'ui-notification', 'ngStorage']);
    app.config(
        function($routeProvider)
        {
            $routeProvider
            .when('/',
            {
                templateUrl: 'views/paginacao/paginacao.html',
                controller: 'PaginacaoController'
            })
        }
    );

    /*app.controller('DashboardController', function($scope, $http, $location, $routeParams, Notification)
    {
        
    });*/



