function applyForLoan(name,age){
    console.log("Apply For Loan Called..");
    console.log("Name is ",name);
    console.log("Age is ",age);
    var obj = require("./duplicatecheck.js");
    if(obj.checkDuplicate(name)>0){
        console.log("Duplicate Name Found...");
    }
    else{
        var scoring = require("./../scoring");
        var result = scoring(age);
        console.log("Score is "+result);
    }
}
module.exports= applyForLoan;