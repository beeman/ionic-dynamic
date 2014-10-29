var app = angular.module('starter.controllers', []);

app.controller('DashboardCtrl', function ($scope, $state) {
    $scope.pageTitle = 'Dashboard';
});
app.controller('SettingsCtrl', function ($scope, $state) {
    $scope.pageTitle = 'Settings';
    $scope.pageContent = 'Settings page';
});
app.controller('AboutCtrl', function ($scope, $state) {
    $scope.pageTitle = 'About';
    $scope.pageContent = 'About page';
});
app.controller('SandboxCtrl', function ($scope, $state) {
    $scope.pageTitle = 'Sandbox';
    $scope.pageContent = 'Sandbox page';
});


