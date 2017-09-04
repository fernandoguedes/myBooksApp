(function() {
    'use strict';

    angular
        .module('myBookApp')
        .service('bookService', bookService);

    bookService.$inject = ['$http'];

    function bookService($http) {
        var URL = 'https://www.googleapis.com/books/v1/volumes';
        var KEY = 'key=AIzaSyD3d4rTM7BRgBoM2Ug23I6o5hAxnKuJpwA';

        this.search = function(keyword, startIndex) {
            var apiUrl = URL + '?q={keyword}&startIndex={startIndex}&maxResults=40&{key}';
            apiUrl = apiUrl
                .replace('{keyword}', keyword)
                .replace('{startIndex}', startIndex)
                .replace('{key}', KEY);

            return $http.get(apiUrl);
        }

        this.getById = function(id) {
            var apiUrl = URL + '/{id}/?{key}';
            apiUrl = apiUrl.replace('{id}', id).replace('{key}', KEY)

            return $http.get(apiUrl);
        }
    }
})();
