(function() {
    'use strict';

    angular
        .module('myBookApp')
        .controller('searchCtrl', searchCtrl);

    searchCtrl.$inject = ['bookService'];

    function searchCtrl(bookService) {
        var self = this;

        self.startIndex = 0;

        self.searchBook = function(keyword) {
            if (self.keyword !== keyword) {
                self.keyword = keyword;
                self.startIndex = 0;
            }

            bookService.search(self.keyword, self.startIndex)
                .then(function(books) {
                    self.searchResults = books.data;
                });
        }

        self.goNextPage = function(keyword) {
            self.startIndex = self.startIndex + 40;
            self.searchBook(keyword);
        }

        self.goPreviousPage = function(keyword) {
            self.startIndex = self.startIndex - 40;
            self.searchBook(keyword);
        }
    }

})();
