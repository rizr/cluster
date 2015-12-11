app.service('authService', ['$resource', function ($resource) {

    return $resource('api/auth/:action', {}, {
        login: {params: {action: 'login'}, method: 'POST'},
        logout: {params: {action: 'logout'}, method: 'POST'}
    });
}]);
