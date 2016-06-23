var http = require("http");
var fs = require("fs");
var path = require("path");

function isStaticFile(url){
    var extensions = [".jpg",".js",".png",".css",".html"];
    var currentExt = path.extname(url);
    return extensions.indexOf(currentExt)>=0;
}
var server = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    var method = request.method;
    var url = request.url;
    console.log("url "+url);
    if(method==="GET" && url==="/"){
        var newPath = path.join(__dirname,'client/pages/index.html');
        var stream = fs.createReadStream(newPath);
        stream.pipe(response);
    }
    if(isStaticFile(url)){
        var newPath = path.join(__dirname,url);
        var stream = fs.createReadStream(newPath);
        stream.pipe(response);
    }
    if(method==="GET" && url==="/getquestions"){
        var newPath = path.join(__dirname,'db/questionbank.json');
        var stream = fs.createReadStream(newPath);
        stream.pipe(response);
}
    //console.log("Method "+method+" URL "+url);
    /*if(method==="GET" && url==="/"){
        response.end("Hello Client ");
    }
    else
    if(method==="GET" && url==="/amit"){
        var newPath = path.join(__dirname,"/pages/index.html");
        var stream = fs.createReadStream(newPath);
        stream.pipe(response);
        //response.end("This is Home Page Request");
    }
    else{
        response.end("Hey this is a New Request ");
    }*/
});
server.listen(9997,function(){
    console.log("Server Start and listen on Port 9997.....");
});