var mongoose = require("mongoose");
// Step -2 Connect to the DB
var db = mongoose.connect("mongodb://localhost:27017/amitdb");
//db.on('error', console.error.bind(console, 'connection error:'));
// Step - 3 Creating Schema
var userSchema= new mongoose.Schema({
    "uid":String,"password":String
});

// Step - 4 Define name of the collection and specify the collection schema
var User = mongoose.model("users",userSchema);

module.exports=User;