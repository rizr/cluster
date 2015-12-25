app.controller('taskController', ['taskService', '$scope', function (taskService, $scope) {
    taskService.completedTasks({}, function (err, resp) {
        if(err) console.log(err);
        console.log(resp);
        $scope.tasks = resp.data;
    });
}]);