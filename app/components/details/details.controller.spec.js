describe('detailsCtrl', function() {
    var detailsCtrl;
    var scope;
    var http;
    var mock = {};

    beforeEach(function() {
        module('myBookApp');

        inject(function($controller, $httpBackend) {
            detailsCtrl = $controller('detailsCtrl', { $scope: scope });
            http = $httpBackend
        });

        mock = readJSON('app/mocks/book.json');
    });

    it('Should exists', function() {
        expect(detailsCtrl).toBeDefined();
    });

    it('The getBook function should exists', function() {
        expect(detailsCtrl.getBook).toBeDefined();
    });

    it('Should get a book by id', function(done) {
        http.expectGET('https://www.googleapis.com/books/v1/volumes/4pZlDQAAQBAJ').respond(200, mock);

        detailsCtrl.getBook('4pZlDQAAQBAJ');

        http.flush();

        expect(detailsCtrl.book).toEqual(mock);

        done();
    });
});
