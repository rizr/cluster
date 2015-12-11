app.controller('authController', ['authService', '$scope', function (authService, $scope) {
    $scope.signin = function () {
        console.log($scope.loginData);
        console.log(authService);
        authService.login({dsa: 1}, function (resp) {
            console.log(resp)
        })
    }
}]);