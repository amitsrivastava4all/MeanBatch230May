app.factory("ItemFactory",function($http,$q){
    return {
        getItems:function(name){
            var deferedObject = $q.defer();
            $http.get("../server/"+name+".json").success(function(data){
                deferedObject.resolve(data);
            }).error(function(err){
                deferedObject.reject(err);
            });
            return deferedObject.promise;
        }
    }
});