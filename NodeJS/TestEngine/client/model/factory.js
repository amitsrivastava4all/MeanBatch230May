app.factory("myfactory",function($http,$q){
   var object = {
       getQuestionJSON:function(){
           var defer  = $q.defer();
           $http.get("http://127.0.0.1:9997/getquestions").success(function(data){
               console.log("Data is "+data);
               defer.resolve(data);
           }).error(function(error){
               defer.reject(error);
           });
        return defer.promise;
       }
   } 
   return object;
});