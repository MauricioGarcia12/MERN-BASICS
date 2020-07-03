//create user in db with schema and model

const {Schema, model}=require('mongoose');

const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        trin:true,
        unique:true
    }
    

},{timestamps:true});

module.exports =model('User',userSchema);