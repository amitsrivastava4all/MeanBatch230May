var express= require("express");

var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
    res.send('This is Home Page Request');
});
// define the about route
router.get('/about', function(req, res) {
    res.send('This is About use Page Request');
});
module.exports = router;