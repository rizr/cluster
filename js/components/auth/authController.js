app.controller('authController', ['authService', '$scope', '$state', function (authService, $scope, $state) {
    $scope.signin = function () {
        authService.signin($scope.loginData, function (error, resp) {
            if (error) {
                $scope.error = "Wrong password or login";
            } else {
                localStorage.token = resp.token;
                $state.go('workers');
            }
        })
    }
}]);