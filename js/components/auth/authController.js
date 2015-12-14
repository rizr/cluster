app.controller('authController', ['authService', '$scope', function (authService, $scope) {
    $scope.signin = function () {
        console.log($scope.loginData);
        console.log(authService);
        authService.signin($scope.loginData, function (error, resp) {
            console.log(resp)
        })
    }
}]);