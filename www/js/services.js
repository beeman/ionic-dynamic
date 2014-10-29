var app = angular.module('starter.services', []);

app.factory('config', function ($q, $http) {
    var config = {
        config: function () {
            return $http.get('../application.json').success(function (data) {
                return data;
            });
        }
    };
    return config;
});
