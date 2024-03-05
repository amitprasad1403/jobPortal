const express = require('express');
const {body} = require('express-validator');
const {getAllUsers,addUser} = require("../controller/User_controller");
const router = express.Router();

router.get('/',getAllUsers);
router.post('/add',[
        body('email','it should be email').isEmail(),
        body('name').isLength({min:5}),
        body('pass','password must be least 5 lenth').isLength({min:5})
    ],addUser);

module.exports = router;