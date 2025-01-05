const Admin = require('../models/Admin')
const User = require('../models/User')

const checkadminlogin = async(request,response) =>{
    try{
        const input=request.body;
        console.log(input);

        const admin=await Admin.findOne(input);
        if(!admin) {
            return response.status(400).send("Admin Not Found");
        }
        return response.json(admin);
        
    }catch(err){
        response.status(500).send(err.message);
    }
}

const adminregister = async(request,response) =>{
    try{
        const {name,username,password}=request.body;
       const adminexists= await Admin.findOne({username});
       if(adminexists) {
        return response.status(400).send("Admin already exists");
       }
       const admin=new Admin({name,username,password});
       
    }
    catch(err)
    {
        response.status(500).send(err.message);
    }
}

module.exports={checkadminlogin};