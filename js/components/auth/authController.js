app.controller('authController', ['$scope', function ($scope) {
    $scope.test = 'test';
    $scope.signin = function() {
        console.log($scope.loginData);
    }
}]);