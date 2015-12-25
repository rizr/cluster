app.controller('workerController', ['workerService', '$scope', function (workerService, $scope) {
    workerService.workersStatus({}, function (error, resp) {
        if (error) console.log(error);
        $scope.workers = resp.data;
    });

    $scope.createTask = function () {
        workerService.createTask({task: $scope.code}, function (error, resp) {
            if (error) console.log(error);
            alert('ok');
        })
    }
}]);