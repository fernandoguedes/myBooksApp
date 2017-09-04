(function() {
    'use strict';

    angular
        .module('myBookApp', ['ngRoute'])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        //$locationProvider.html5mode(true);

        $routeProvider
            .when('/details/:id', {
                templateUrl: 'app/components/details/details.html',
                controller: 'detailsCtrl',
                controllerAs: 'details'
            })
            .when('/favorites', {
                templateUrl: 'app/components/favorites/favorites.html',
                controller: 'favoritesCtrl',
                controllerAs: 'favorites'
            })
            .when('/search', {
                templateUrl: 'app/components/search/search.html',
                controller: 'searchCtrl',
                controllerAs: 'search'
            })
            .otherwise({ redirectTo: '/search' });
    }
})();
