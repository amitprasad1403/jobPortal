const User = require('../model/User');
const bcrypt = require('bcryptjs');
const {body,validationResult} = require('express-validator');

const getAllUsers = async (req, res, next) => {
    try{
        //Get Query
        const users = await User.find();
        return res.status(200).json({users});
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

const addUser = async (req, res, next) => {
    try{
        //Validation in express
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Extract specific error messages
            const errorMessages = errors.array().map(error => error.msg);
            return res.status(400).json({ errors: errorMessages });
        }

        //To incrypt the password
        const salt = await bcrypt.genSalt(10);
        const secure_pass = await bcrypt.hashSync(req.body.pass, salt);

        //Add query
        const add_user = User.create({
            name:req.body.name,
            email:req.body.email,
            mobile_number:req.body.mobile_number,
            dob:req.body.dob,
            username:req.body.username,
            pass:secure_pass
        })
        return res.status(200).json({success:true});
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

module.exports = {getAllUsers,addUser}