var mongoose = require('mongoose');
var loginModel = require("../models/login.model");
var activeUSer;

exports.validateLogin = function(req,res){

    req.params.username = 'sindhuri';
    req.params.password = 'sin@123';
    var currentuser;

    loginModel.findOne({username:req.params.username,password:req.params.password},function(err,response){
        currentuser=response;
        if(!currentuser){
            console.log("user does not exist");
            res.send("user does not exist or wrong password");
        }else{
                //activeUSer = currentuser.username;
                res.status(200).json({activeuser:currentuser.username});
        }
    });
}

exports.createUser = function(req,res){

    req.params.username ='sindhuri';
    req.params.password = 'sin@123';
    
    const newuser = new loginModel({username:req.params.username,password:req.params.password});
    newuser.save(function(err,user){
        if(err) throw err;
        console.log("user added");
    });
    res.send("New user"+newuser.username+"successfully signed up");

}

exports.logout = function(){
    activeUSer = null;
}