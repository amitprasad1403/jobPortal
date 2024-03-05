const express = require('express');
const mongoose = require('mongoose');
const job_route = require('./routes/job_routes');
const user_route = require('./routes/user_routes');

const app = express();  

//middleware
app.use(express.json());

app.use("/api/jobs",job_route);
app.use("/api/user",user_route);

mongoose.connect("mongodb://localhost:27017/jobPortal")
.then(() => app.listen(5000))
.then(() =>
    console.log("connected to mongodb and listening to port 5000")
)
.catch((err) => console.log(err))