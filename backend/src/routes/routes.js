var express = require('express');
var router = express.Router();
//var login_controller = require("./controllers/loginController.js")
var task_controller = require("../controllers/taskController");
/*router.get('/index', function(req, res){
  res.json(res.json());
});*/
//router.get('/login', login_controller.validateLogin());
router.get('/addtask',task_controller.addTask);
router.get('/get/:username',task_controller.getAllTasks);
router.get('/deleteTask',task_controller.deleteTask);
router.get('/updateTask',task_controller.updateTask);
module.exports = router;