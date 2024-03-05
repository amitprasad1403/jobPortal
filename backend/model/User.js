const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: [true,'Email should be unique']
    },
    mobile_number:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        default: Date.now
    },
    username:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("user",UserSchema);