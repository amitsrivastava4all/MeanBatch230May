var flightCheck = require("./flightcheck");
function flightBook(){
if(flightCheck(20)){
    return "Flight Booked";
}
else
{
    return "Flight Not Booked";
}
}
module.exports=flightBook;
