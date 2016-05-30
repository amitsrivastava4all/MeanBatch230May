app.controller("itemController",function($scope,ItemFactory,$routeParams){
   var promise =ItemFactory.getItems($routeParams.type); 
    function success(data){
        $scope.data = data;
    }
    function error(err){
        $scope.error = err;
    }
    promise.then(success,error);
    
});