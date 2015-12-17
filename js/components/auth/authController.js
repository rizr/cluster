app.controller('authController', ['authService', '$scope', function (authService, $scope) {
    $scope.signin = function () {
        authService.signin($scope.loginData, function (error, resp) {
            console.log(error, resp);
            localStorage.token = resp.token;
        })
    }
}]);