var express = require('express');
var router = express.Router();
var login_controller = require("./controllers/loginController.js")
router.get('/', function(req, res){
  res.render('index')
});
router.get('/login', login_controller.validateLogin());
module.exports = router;