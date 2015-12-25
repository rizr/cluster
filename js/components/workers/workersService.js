app.service('workerService', ['$resource', function ($resource) {

    var JWT = localStorage.token;

    var workers = $resource('http://127.0.0.1:8888/api/worker/:action', {}, {
        status: {params: {action: 'status'}, method: 'GET', headers: {'Authorization': JWT}},
        createTask: {params: {action: 'createTask'}, method: 'POST', headers: {'Authorization': JWT}}
    });

    var service = {
        workersStatus: function (data, cb) {
            workers.status(data, function (resp) {
                cb(null, resp);
            }, function (error) {
                cb(error);
            });
        },
        createTask: function (data, cb) {
            workers.createTask(data, function (resp) {
                cb(null, resp);
            }, function (error) {
                cb(error);
            });
        }
    };

    return service;
}]);
