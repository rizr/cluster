app.controller('authController', ['$rootScope', 'authService', '$scope', '$state', function ($rootScope, authService, $scope, $state) {
    $rootScope.Auth = false;
    $scope.signin = function () {
        authService.signin($scope.loginData, function (error, resp) {
            if (error) {
                $scope.error = "Wrong password or login";
            } else {
                localStorage.token = resp.token;
                $rootScope.Auth = true;
                $state.go('workers');
            }
        });
    };
}]);