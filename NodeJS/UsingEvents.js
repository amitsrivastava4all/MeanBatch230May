var events = require("events");
var eventEmitterObject = new events.EventEmitter();

// Define Event Callback
function callback(value){
    console.log("Ring  Ring By "+value);
}

// Define an Event
eventEmitterObject.addListener("ring",callback); // Here Register the Event


// Define
/*eventEmitterObject.on("ring",function(){
    console.log("Bell Rings");
});*/
eventEmitterObject.emit("ring","Amit");  // Event Call


function dbConnectionCreate(){
console.log("DB Connection Created...");
}
function dbConnectionClose(){
    console.log("DB Connection Close...");
}
eventEmitterObject.on("connection",dbConnectionCreate);
eventEmitterObject.on("close",dbConnectionClose);

eventEmitterObject.emit("connection");
eventEmitterObject.emit("close");














/*

function mycallback(value){
console.log("My Event Called... ",value);
}

function anothercallback(){
console.log("Another Call Back Called... ");
}


// this code will define the event
// the default limit to attach a callback is 10
ee.setMaxListeners(20);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);

//ee.on("myevent",anothercallback);

ee.emit("myevent",'amit');  // this code trigger the event
ee.removeListener("myevent",mycallback);
ee.emit("myevent",'mike');
ee.emit("myevent",'tim');
ee.emit("myevent",'tom');*/
