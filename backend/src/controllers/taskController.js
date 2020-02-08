var mongoose = require('mongoose');
var taskModel = require("../models/task.model");

exports.addTask = function(req,res){

    req.params.username ="sindhu";
    req.params.taskid=2;
    req.params.taskdescription="task 2";
    req.params.isDone =false;

    const taskobj = new taskModel({username:req.params.username,task:{taskid:req.params.taskid,
        taskdescription:req.params.taskdescription,isDone:req.params.isDone}});
    taskobj.save(function(err,task){
        console.log("inside save");
        if(err) {
            console.log("ERRORRRRRR");
            throw err;
        }
        console.log("Task "+task.username+","+task.task.taskdescription+" is added");
    });
    res.send("Task "+taskobj.task.taskdescription+" is added");
};

exports.getAllTasks = function(req,res){

    req.params.username="sind";

    taskModel.find({username:req.params.username,"task.isDone":false})
    .then((response)=>res.send(response));
};

exports.deleteTask = function(req,res){

    req.params.username="sind";
    req.params.taskid = 1;

    taskModel.deleteOne({username:req.params.username},{"task.taskid":req.params.taskid})
    .then(res.send("deleted"));
}

exports.updateTask = function(req,res){

    req.params.username="sind";
    req.params.taskid = 1;

    taskModel.update({username:req.params.username,"task.taskid":req.params.taskid},{$set:{"task.isDone":true}})
    .then(res.send("updated"));
}