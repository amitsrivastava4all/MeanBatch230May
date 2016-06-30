var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200,"{'content-type':'text/html'}");
    response.write("<html><body>");
    //response.write("Headers are "+request.headers);
    for( i in request.headers){
        response.write("Key "+i+" Value "+request.headers[i]+"<br>");
    }
    // response.write(JSON.stringify(request.headers));

    response.write("<br>Method "+request.method);
    response.write("<br>URL "+request.url);
    response.end("</body></html>");
}).listen(1234);
console.log("Server Start...");