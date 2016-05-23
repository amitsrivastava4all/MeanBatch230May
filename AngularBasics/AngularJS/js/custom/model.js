// Define Model
    app.factory("sifactory",function(){
        console.log("Factory Also Run When Controller Inject Me");
       var object =  {
           calculate:function(pr ,rate , time){
               console.log("I Will run when Controller Call me");
               return ((pr * rate * time) /100);
           }
       } 
       return object;
    }); 