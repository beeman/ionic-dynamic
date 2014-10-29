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

/**
 * This variable will store the base configuration which we get using the config service in AppCtrl
 */
app.baseConfig = false;

app.controller('InitCtrl', function ($scope, $state, $timeout, $ionicViewService, config) {

    $ionicViewService.nextViewOptions({
        disableAnimate: true,
        disableBack: true
    });

    var getExistingStates = function () {
        var existingStates = $state.get();

        var existing = [];

        for (var idx in existingStates) {
            var currentState = existingStates[idx];
            existing.push(currentState.name)
        }
        return existing;
    };


    var addState = function (state) {
        var existing = getExistingStates();

        app.baseConfig.defaultState = app.defaultStateSafe;

        if(existing.indexOf(state.state) === -1) {
            if (state.defaultState) {
                app.baseConfig.defaultState = app.defaultStateSafe = state.state;
                app.urlRouterProvider.otherwise(state.state);
            }
            app.stateProvider.state(state.state, {
                url: state.url,
                views: {
                    'menuContent': {
                        templateUrl: state.templateUrl,
                        controller: state.controller
                    }
                }
            });
        }

    };

    $scope.message = "Loading...";

    $timeout(function() {

        config.config().then(function (response) {


            $scope.config = app.baseConfig = response.data;

            console.log('Add states');
            for (var idx in app.baseConfig.states) {
                addState(app.baseConfig.states[idx]);
            }

            console.log('done');
            console.log(app.baseConfig.defaultState);
            $state.go(app.baseConfig.defaultState, {}, {location: true})

        });


    }, 1500);


});
