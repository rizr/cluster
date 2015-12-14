app.service('authService', ['$resource', function ($resource) {

    var auth = $resource('api/auth/:action', {}, {
        signin: {params: {action: 'signin'}, method: 'POST'},
        logout: {params: {action: 'logout'}, method: 'POST'},
        signup: {params: {action: 'signup'}, method: 'POST'}
    });

    var service = {
        signin: function (data, cb) {
            auth.sigin(data, function (resp) {
                cb(resp.error, resp.data);
            });
        },
        logout: function (data, cb) {
            auth.logout(data, function (resp) {
                cb(resp.error, resp.data);
            });
        },
        signup: function (data, cb) {
            auth.logout(data, function (resp) {
                cb(resp.error, resp.data);
            });
        }
    };

    return service;
}]);
