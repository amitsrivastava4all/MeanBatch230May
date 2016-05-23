 app.controller("sicontroller",function($scope,sifactory){
     console.log("Controller RUn.....");
        $scope.calculateSimpleInterest=function(){
            console.log("I am Only Run When u Click on Button")
        $scope.result = sifactory.calculate($scope.pr,$scope.rate,$scope.time);    
       //$scope.result = $scope.pr * $scope.rate * $scope.time/100; 
    }  // function end
        }) ; // Controller End   