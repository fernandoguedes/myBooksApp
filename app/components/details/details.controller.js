(function() {
    'use strict';

    angular
        .module('myBookApp')
        .controller('detailsCtrl', detailsCtrl);

    detailsCtrl.$inject = ['$routeParams', 'bookService'];

    function detailsCtrl($routeParams, bookService) {
        var self = this;

        self.getBook = function(id) {
            id = id || $routeParams.id;

            bookService.getById(id)
                .then(function(book) {
                    self.book = book.data;
                });
        }
    }

})();
