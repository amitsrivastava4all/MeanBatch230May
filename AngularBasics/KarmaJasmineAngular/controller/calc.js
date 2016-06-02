var app = angular.module("myapp",[]);
app.controller("myctrl",function($scope){
    $scope.add=function(){
        $scope.result  = parseInt($scope.firstNumber) + parseInt($scope.secondNumber);
        return $scope.result;
    }
})