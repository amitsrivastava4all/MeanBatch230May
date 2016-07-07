
// Step - 1 require the mongoose module
var mongoose = require("mongoose");
// Step -2 Connect to the DB
mongoose.connect("mongodb://localhost:27017/userdb");
// Step -3 Represent Schema
var Schema = mongoose.Schema;
// Step -4  Creating Schema for the Collection
var userSchema= new Schema({});
var User = mongoose.model("users",userSchema);  // User Object Represent users Collection/*
/*User.find({product:'mobile'},function(error,response){

});*/

User.create({"name":"Ram","phone":[2222,3333],"address":[{"state":"Delhi","pincode":2222},{"state":"Delhi","pincode":2222}]},function(error,response){
   if(error){
       console.log("Can't Add Error Occured ",error);
   }
    else{
       console.log("Record Added...");
   }
});
//}
//}
//module.exports=dbOperations;
