var app = angular.module('app', ["ui.router"]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/notFound");

    $stateProvider
        .state('auth', {
            url: '/auth'
        })
}]);