(function() {
    'use strict';

    angular
        .module('myBookApp')
        .controller('searchCtrl', searchCtrl);

    searchCtrl.$inject = ['bookService'];

    function searchCtrl(bookService) {
        var self = this;

        self.searchBook = function(keyword) {
            bookService.search(keyword)
                .then(function(books) {
                    self.searchResults = books.data;
                });
        }
    }

})();
