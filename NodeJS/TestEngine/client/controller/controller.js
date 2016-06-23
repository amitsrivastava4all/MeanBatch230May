app.controller("myctrl",function($scope,myfactory){
   var promise =myfactory.getQuestionJSON();
    promise.then(function(data){
       $scope.print =  data;
    },function(err){
        $scope.print = data;
        
    });
});