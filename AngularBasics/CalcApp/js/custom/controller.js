app.controller("calcController",function($scope,calcService){
    /*$scope.add=function(){
        $scope.result = calcFactory.add($scope.firstNumber,$scope.secondNumber);
    },
    $scope.subtract=function(){
        $scope.result = calcFactory.subtract($scope.firstNumber,$scope.secondNumber);
    }    */
    $scope.operation=function(operator){
        $scope.result = calcService.calcOperation(operator,$scope.firstNumber,$scope.secondNumber);
    }
});