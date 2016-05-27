app.controller("myctrl",function($scope,MyFactory){

    $scope.callSimpleInterest=function(){
        //alert("JSON FROM FACTORY "+MyFactory.getJSON());

        //var promise =JSON.stringify(MyFactory.getJSON($scope));
        var promise = MyFactory.getJSON($scope);
        alert("RESULT Is "+promise);
        for(var i  = 1; i<=1000; i++){
            console.log("I ",i);
        }
        //console.log("JSON From Factory " +promise);
       // console.log("Typeof ",promise);
        //promise = JSON.parse(promise);
        //console.log("Array ",promise instanceof Array);
       // console.log(" Length is "+promise.length);
        promise.then(function(object) {
            alert('Promise Success: ' + object);
            $scope.object = object;

        }, function(reason) {
            alert('Failed: ' + reason);
            $scope.object=reason;
        });
        /*var empArray =[];
        for(var i = 0; i<promise.length; i++){
            empArray.push(promise[i]);
        }

        console.log("Emp Array ",empArray instanceof Array);
        console.log("Length is ",empArray.length);
        $scope.empArray = empArray;*/
    };
});