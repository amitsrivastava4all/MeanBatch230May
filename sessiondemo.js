var session = require('express-session');
/*
 Create a session middleware with the given options.

 Note Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.

 Warning The default server-side session storage, MemoryStore
 */
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true,maxAge: 60000 }
}))

app.get('/login',function(req,res,next){
    // Call to Mongo For Checking Credentials
    var session = req.session; // get session
    session.userid = req.param.userid; // fill session
})
app.get('/test',function(req,res,next){
    var session = req.session;
    if(!session.userid){
        res.sendFile("login.html");
    }
})

app.get('/', function(req, res, next) {
    var sess = req.session
    if (sess.views) {
        sess.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + sess.views + '</p>')
        res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        sess.views = 1
        res.end('welcome to the session demo. refresh!')
    }
})