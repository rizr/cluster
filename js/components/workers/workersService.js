app.service('workerService', ['$resource', function ($resource) {
    var workers = $resource('api/worker/:action', {}, {
        status: {params: {action: 'status'}, method: 'GET'},
        createTask: {params: {action: 'createTask'}, method: 'POST'}
    });

    var service = {
        workersStatus: function (data, cb) {
            workers.status(data, function (resp) {
                cb(resp);
            });
        },
        createTask: function (data, cb) {
            workers.createTask(data, function (resp) {
                cb(resp);
            });
        }
    };

    return service;
}]);
