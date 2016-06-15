function one(){
    console.log("One Call");
    var caller = require("./two.js");
    caller();
}
one();
module.exports=one;