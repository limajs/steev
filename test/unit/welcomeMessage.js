describe("Application Controller", function () {
    describe("Welcome Message", function () {
        var scope, ctrl;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller(ApplicationController, {$scope: scope});
        }));

        it("Defaults to 'Hello World'", function () {
            expect(scope.welcomeMessage).toBe('Hello World');
        });
    });
});
