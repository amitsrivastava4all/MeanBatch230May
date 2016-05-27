app.factory("MyFactory",function($http,$q){
    return {
        getJSON:function(scope){
            var object ;
            var defered = $q.defer();
            $http.get('sample.json').success(function(data){
                alert("Success Data is "+data[0].id + " "+data[0].name+ " "+data[0].salary);
                object = data;
                //scope.object = data;
                defered.resolve(object);
            }).error(function(er){
                alert("Error is ",er);
               defered.reject("No Data Found...");
            });

            return defered.promise ;
           // return object;
        }
    }

});