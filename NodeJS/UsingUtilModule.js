var util = require("util");
var complexJson = {
    "obj1":{
        "obj2":{
            "obj3":{
                "obj4":{
                    "obj5":{
                        "obj6":{

                        }
                    }
                }
            }
        }
    }
}
util.log("I am in This Function ");
console.log("Printing Complex Object ");
console.log(complexJson);
//console.log("Printing Complex Object Using Util Module");
console.log(util.inspect(complexJson,{showHidden:true,depth:null}));

var x=[90,89]
console.log("IsArray ",util.isArray(x));
console.log("IsDate ",util.isDate(new Date()));
console.log("IsNull or Undefined ",util.isNullOrUndefined(undefined));
console.log("IsNull or Undefined ",util.isNullOrUndefined(null));

util.log("Iam Complete this function");
