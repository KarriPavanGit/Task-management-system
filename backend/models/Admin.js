const mongoose=require('mongoose')

const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique:true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullname: { type: String },
    phonenumber: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now }
})

const Admin=mongoose.model("Admin",AdminSchema)

module.exports = Admin;