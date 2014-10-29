var app = angular.module('starter.controllers', []);


app.controller('AppCtrl', function ($scope, $state, $ionicViewService) {
    $ionicViewService.nextViewOptions({
        disableAnimate: true,
        disableBack: true
    });
    console.log('Loading AppCtrl');

    $scope.appName = app.baseConfig.appName;
    $scope.menuItems = app.baseConfig.menuItems;

});

app.controller('LayoutCtrl', function ($scope, $state) {
    $scope.init = function () {
        $state.go('init', true);
    };
    $scope.defaultState = function () {
        $state.go(app.baseConfig.defaultState, true);
    };
});
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


