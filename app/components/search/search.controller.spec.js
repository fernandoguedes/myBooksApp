describe('searchCtrl', function() {
    var searchCtrl;
    var scope;
    var http;
    var mock = {};

    beforeEach(function() {
        module('myBookApp');

        inject(function($controller, $httpBackend) {
            searchCtrl = $controller('searchCtrl', { $scope: scope });
            http = $httpBackend
        });

        mock = readJSON('app/mocks/books.json');


    });

    it('Should exists', function() {
        expect(searchCtrl).toBeDefined();
    });

    it('The searchBook function should exists', function() {
        expect(searchCtrl.searchBook).toBeDefined();
    });

    it('Should make request to google api with digital marketing keywords', function(done) {
        http.expectGET('https://www.googleapis.com/books/v1/volumes?q=digital marketing').respond(200, mock);

        searchCtrl.searchBook('digital marketing');

        http.flush();

        expect(searchCtrl.searchResults).toEqual(mock);

        done();
    });
});
