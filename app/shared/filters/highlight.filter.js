(function() {
    'use strict';

    angular
        .module('myBookApp')
        .filter('highlight', highlight);

    highlight.$inject = ['$sce'];

    function highlight($sce) {
        return function(str, term, id) {
            if (!str) {
                return str;
            }

            return $sce.trustAsHtml(str.replace(new RegExp('('+term+')', 'gi'), '<span class="search-highlight">$1</span>').substring(0, 200) + '... <a href="#!/details/'+ id + '">Ver Mais</a>');
        }
    }

})();
