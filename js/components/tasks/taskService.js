app.service('taskService', ['$resource', function ($resource) {

    var JWT = localStorage.token;

    var tasks = $resource('http://127.0.0.1:8888/api/tasks/:action', {}, {
        completedTasks: {params: {action: 'completed'}, method: 'GET', headers: {'Authorization': JWT}}
    });

    var service = {
        completedTasks: function (data, cb) {
            tasks.completedTasks(data, function (resp) {
                cb(null, resp);
            }, function (error) {
                cb(error);
            });
        }
    };

    return service;
}]);
