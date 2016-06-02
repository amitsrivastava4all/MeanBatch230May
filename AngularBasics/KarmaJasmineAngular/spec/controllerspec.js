// 1. Jasmine - Unit Testing Code
// Step - 1 Create TestSuite
describe("Calculator TestSuite",function(){
    /*var scope;
    var myCtrl;*/
   beforeEach(module("myapp"));  // Module Injected in Unit Test
    // Step - 2 It Create TestCase
    beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            myCtrl = $controller('myctrl', {
                $scope: scope
            });
        }));
    it("It Should add two numbers",function(){
        // Inject Root Level Scope (That is Actually Module Level Scope 
        //not controller level scope e.g $scope)
        //$controller will inject controller
        scope.firstNumber=100;
        scope.secondNumber=200;
        var result = scope.add();
        expect(result).toBe(300);
        
    }) 
});