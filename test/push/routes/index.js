var express = require('express');
var router = express.Router();
/* //var admin = require("firebase-admin");

var serviceAccount = require("../../../blbserver-43408-firebase-adminsdk-8u42x-1c60846f59.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://blbserver-43408.firebaseio.com/"
}); */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//console.log('serviceAccount= ', serviceAccount);
module.exports = router;
