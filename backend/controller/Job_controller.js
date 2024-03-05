const Job = require('../model/Jobs');

const getAllJobs = async (req, res, next) => {
    try{
        const jobs = await Job.find();
        return res.status(200).json({jobs});
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

const addJobs = async (req, res, next) => {
    try{
        const {job_title,job_desc,qualification,experience,job_type,skills,location,pay,pay_type,publish_on} = req.body;
        const add_job = await Job.create({
            job_title:job_title,
            job_desc:job_desc,
            qualification:qualification,
            experience:experience,
            job_type:job_type,
            skills:skills,
            location:location,
            pay:pay,
            pay_type:pay_type,
            publish_on:publish_on
        }).then(res.json({success:true}))
        // res.status(200).json({add_job});
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

module.exports = {getAllJobs,addJobs};

