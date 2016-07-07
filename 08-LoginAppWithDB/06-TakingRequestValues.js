var http=require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var util = require('util');
//var login=require("./login");
var querystring= require("querystring");
var jade = require("jade");
http.createServer(handleRequest).listen(1234,function(){
   console.log("Server Start");
});
function handleRequest(request, response){
    var urlValue = request.url;
    var method = request.method;
    //var urlObject = url.parse(urlValue,true); // parse the Url and give the url object
    console.log("URLValue "+urlValue+" Method "+method);

    //console.log("Inspect Object ",util.inspect(util, { showHidden: true, depth: null }));
    if(urlValue==='/' && method==='GET'){
        var homePath = path.join(__dirname,'/index.html');
        var stream =fs.createReadStream(homePath);
        stream.pipe(response);
    }
    else
    if(urlValue==='/login.html' && method==='GET'){
        var homePath = path.join(__dirname,'/login.html');
        var stream =fs.createReadStream(homePath);
        stream.pipe(response);
    }
    else
    if(urlValue==='/login'  && method==='POST'){
        console.log("Inside Post ");
        var rawData = '';
        request.on('data', function(chunk){
            rawData += chunk;
        });

        request.on('end', function() {

            var qs = querystring.parse(rawData);
            console.log("RawData "+rawData+" qs "+qs);
            var login=require("./logincheckdao");
            login(qs.userid,qs.pwd,response);
            //var resultObject = login(qs.userid,qs.pwd);
            /*var jadePath = path.join(__dirname,'/sample.jade');
            fs.readFile(jadePath, 'utf-8', function(error, source){
                var template = jade.compile(source);
                console.log(resultObject);
                var html = template(resultObject);
                response.end(html);
            });*/

        });
    }
    else
    if(urlValue.indexOf("/login")!==-1 && method==='GET'){
        var userid = url.parse(urlValue,true).query.userid;
        var password = url.parse(urlValue,true).query.pwd;
        console.log("Inside /login "+userid+" "+password);
        var resultObject = login(userid,password);
        var jadePath = path.join(__dirname,'/sample.jade');
        fs.readFile(jadePath, 'utf-8', function(error, source){
            var template = jade.compile(source);
            console.log(resultObject);
            var html = template(resultObject);
            response.end(html);
        });

    }
}

function useJADE(){

}
