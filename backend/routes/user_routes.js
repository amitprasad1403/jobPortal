const express = require('express')
const {getAllUsers,addUser} = require("../controller/User_controller")
const router = express.Router();

router.get('/',getAllUsers);
router.post('/add',addUser);

module.exports = router;