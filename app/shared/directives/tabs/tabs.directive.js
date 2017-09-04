(function() {
    'use strict';

    angular
        .module('myBookApp')
        .directive('tabs', tabs);

    tabs.$inject = [];

    function tabs() {
        return {
            scope: {
                description: '=',
                identifiers: '=',
                download: '=',
                images: '='
            },
            templateUrl: 'app/shared/directives/tabs/tabs.html',
            link: function(scope, elem, attrs) {
                scope.toggleTab = function(id) {
                    var activeTab = document.getElementsByClassName('is-active');
                    activeTab[0].classList.remove('is-active');

                    var tabsContent = document.getElementsByClassName('tabs-content');
                    for (var i = 0; i < tabsContent.length; i++) {
                        tabsContent[i].style.display = 'none';
                    }

                    var tab = document.getElementsByClassName(id);
                    tab[0].classList.add('is-active');

                    var tabContent = document.getElementById(id);
                    tabContent.style.display = 'block';
                }
            }
        }
    }

})();
