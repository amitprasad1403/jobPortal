const express = require('express');
const {getAllJobs,addJobs} = require("../controller/Job_controller");
const router = express.Router();

router.get("/",getAllJobs);
router.post("/add",addJobs);

module.exports = router;