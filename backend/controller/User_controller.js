const User = require('../model/User');

const getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find();
        return res.status(200).json({users});
    }
    catch(err){
        console.log(err);
        return res.status(400).json(err);
    }
}

const addUser = async (req, res, next) => {
    try{
        const add_user = User.create({
            name:req.body.name,
            email:req.body.email,
            mobile_number:req.body.mobile_number,
            dob:req.body.dob,
            username:req.body.username,
            pass:req.body.pass
        })
        return res.status(200).json({success:true});
    }
    catch(err){
        console.log(err);
        return res.status(400).json(err);
    }
}

module.exports = {getAllUsers,addUser}