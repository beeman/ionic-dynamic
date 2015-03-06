var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});


/**
 * Binding the stateProvider and urlRouterProvider is a smart way to access them across the complete application.
 * This way we can dynamically manipulate them which is exactly what we want!
 *
 * Inspired by this post: http://alexfeinberg.wordpress.com/2014/03/08/dynamically-populating-angular-ui-router-states-from-a-service
 */
app.config(function ($stateProvider, $urlRouterProvider) {
    app.stateProvider = $stateProvider;
    app.stateProvider.state('init', {
        url: "/init",
        templateUrl: "templates/init.html",
        controller: 'InitCtrl'
    });
    app.stateProvider.state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    });

    app.urlRouterProvider = $urlRouterProvider;
    app.urlRouterProvider.otherwise('/init');
});
