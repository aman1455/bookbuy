import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        max:10,
        min:1,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        max:10,
        min:1,
    },
    username:{
        type:String,
        required:true,
        trim:true,
        min:6,
        max:20,
        unique:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    }
});

const user= mongoose.model('user',userSchema);
export default user;