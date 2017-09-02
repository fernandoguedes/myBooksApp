(function() {
    'use strict';

    angular
        .module('myBookApp')
        .service('bookService', bookService);

    bookService.$inject = ['$http'];

    function bookService($http) {
        var URL = 'https://www.googleapis.com/books/v1/volumes';
        var KEY = '?key=AIzaSyD3d4rTM7BRgBoM2Ug23I6o5hAxnKuJpwA';

        this.search = function(keyword) {
            var apiUrl = URL + '?q=' + keyword;
            return $http.get(apiUrl);
        }

        this.getById = function(id) {
            var apiUrl = URL + '/' + id + KEY;
            return $http.get(apiUrl);
        }

    }
})();
