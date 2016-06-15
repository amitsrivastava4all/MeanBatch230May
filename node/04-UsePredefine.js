var fs = require("fs"); // Using Node Core Module
// Asynch Style
/*fs.readFile("abcd.txt",function(error,data){
   console.log("Data is "+data); 
});*/
// Synch Style
var data= fs.readFileSync("abcd.txt");
console.log("Data is "+data);
var x = 100;
var b = 200;
var c  =  x+ b;
console.log("Hello Node ",c);