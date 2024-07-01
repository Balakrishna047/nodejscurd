const express =require('express')
const app = express();
const dotenv=require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');  
const employeeRoutes = require('./router/employeeRouter');

dotenv.config();
app.use(bodyParser.json());
const Port=process.env.PORT ||3300
mongoose.connect(process.env.Mongo_URL).then(()=>{
    console.log("Mongodb conncted successfully")
})
.catch((error)=>{
    console.log("Mongodb error: " + error)
})



app.use("/",employeeRoutes);

app.listen(Port,()=>{
    console.log("Server started at port:",Port);
})