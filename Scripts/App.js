var app = angular.module('CrazyBooksApp', ['ngAnimate', 'ngRoute', 'ui.grid']);

app.config(function ($routeProvider, $locationProvider)
{
    $routeProvider.when('/users',
    {
        template: '<users></users>'
    });

    $routeProvider.when('/books',
    {
        template: '<books></books>'
        });

    $routeProvider.when('/rooms',
        {
            template: '<rooms></rooms>'
        });

    $routeProvider.when('/lens',
    {
        template: '<lens></lens>'
    });


    $locationProvider.html5Mode(true);
});

