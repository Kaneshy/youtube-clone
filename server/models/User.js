import mongoose from "mongoose";

const IndividuoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
    },
    img:{
        type:String,
    },
    subcribers:{
        type:Number,
        default:0
    },
    subscribedUsers:{
        type:[String]
    },
    fromGoogle:{
        type:Boolean,
        default: false
    }
    
},{timestamps:true})

export default mongoose.model('Individuo', IndividuoSchema, 'Users')