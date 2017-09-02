(function() {
    'use strict';

    angular
        .module('myBookApp')
        .controller('favoritesCtrl', favoritesCtrl);

    favoritesCtrl.$inject = ['storageService'];

    function favoritesCtrl(storageService) {
        var self = this;

        self.getFavorites = function() {
            self.books = storageService.getFavorites();
        }
    }

})();
