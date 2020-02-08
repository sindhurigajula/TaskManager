const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let loginSchema = new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true}
},{collection:"Users"});

const login = mongoose.model('User',loginSchema);
mongoose.exports = login;