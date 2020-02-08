var mongoose = require('mongoose');
var loginmodel = require("./models/login.model.js");

exports.validateLogin = function(req,res){
    loginmodel.findOne('sindhu',function(err,response){
        
    })
}