function connect(res){
// Step - 1 require the mongoose module
var mongoose = require("mongoose");
// Step -2 Connect to the DB
mongoose.connect("mongodb://localhost:27017/nodetest");
// Step -3 Represent Schema
var Schema = mongoose.Schema;
// Step -4  Creating Schema for the Collection
var productSchema= new Schema({"id":Number,
    "url":String
    });
var User = mongoose.model("products",productSchema);

User.find({},function(error,data){
   if(error){
       console.log("Can't Add Error Occured ",error);
   }
    else{
       console.log("Data "+data);
       res.send(data);

   }
});
}
module.exports =connect;
//}
//}
//module.exports=dbOperations;
