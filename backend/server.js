const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const dotenv=require('dotenv')

dotenv.config();

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true,useUnifiedTopology: true})
        .then(()=>{
            console.log("Connect to DB successfully")
        })
        .catch((err)=>{
            console.log(err.message)
        });

const adminroutes=require("./routes/AdminRoutes")
app.use("",adminroutes)



const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})

