/**
 * Created by arnav on 1/20/2016.
 */
var express = require("express");
var app = express();
app.route('/search')
    .get(function(req, res) {
        res.send('Search Using get');
    })
    .post(function(req, res) {
        res.send('Search Using Post');
    });
    //.put()
    //.delete()
app.listen(1234,function(){
    console.log("Server Start...");
})