const mongoose = require('mongoose');

const {Schema} = mongoose;

const JobsSchema = new Schema({
    job_title:{
        type:String,
        required:true,
    },
    job_desc:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    job_type: {
        type: String,
        enum: ['Remote', 'On-Site'],
        required: [true, 'Job Type must be required']
    },
    skills:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    pay:{
        type:String,
        required:true
    },
    pay_type:{
        type:String,
        enum:['month','hr'],
        required:true
    },
    publish_on:{
        type:Date,
        default: Date.now
    }

})

module.exports = mongoose.model("job",JobsSchema);