(function() {
    'use strict';

    angular
        .module('myBookApp')
        .service('storageService', storageService);

    storageService.$inject = [];

    function storageService() {
        var self = this;

        self.addFavorite = function(book) {
            var favorites = self.getFavorites();

            var ids = favorites.map(function(value) {
                return value.id;
            });

            if (ids.indexOf(book.id) < 0) {
                favorites.push(book);
                localStorage.setItem('myBookApp', JSON.stringify(favorites));
            } else {
                self.removeFavorite(book);
            }
        }

        self.removeFavorite = function(book) {
            var favorites = self.getFavorites();

            favorites = favorites.filter(function(value, key) {
                return book.id !== value.id;
            });

            localStorage.setItem('myBookApp', JSON.stringify(favorites));
        }

        self.getFavorites = function() {
            if (localStorage.getItem('myBookApp')) {
                return JSON.parse(localStorage.getItem('myBookApp'))
            } else {
                return [];
            }
        }

        self.getIds = function() {
            var favorites = self.getFavorites();

            return favorites.map(function(book) {
                return book.id;
            });
        }
    }
})();
