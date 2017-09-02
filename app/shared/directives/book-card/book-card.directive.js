(function() {
    'use strict';

    angular
        .module('myBookApp')
        .directive('bookCard', bookCard);

    bookCard.$inject = ['storageService'];

    function bookCard(storageService) {
        return {
            scope: {
                authors: '=',
                book: '=',
                description: '=',
                image: '=',
                categories: '=',
                id: '='
            },
            templateUrl: 'app/shared/directives/book-card/book-card.html',
            link: function(scope, elem, attrs) {
                _getFavorite();

                scope.addFavorite = function() {
                    var newFavorite = {
                        title: scope.book,
                        description: scope.description,
                        authors: scope.authors,
                        image: scope.image,
                        categories: scope.categories,
                        id: scope.id
                    };

                    storageService.addFavorite(newFavorite);

                    scope.isFavorite = !scope.isFavorite;
                }

                function _getFavorite() {
                    var ids = storageService.getIds();

                    if (ids.indexOf(scope.id) > -1) {
                        scope.isFavorite = true;
                    } else {
                        scope.isFavorite = false;
                    }
                }
            }
        }
    }

})();
