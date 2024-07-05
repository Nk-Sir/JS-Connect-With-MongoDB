/**
 * define the schema of student to be 
 * stores i the DB
 */

const mongoose = require("mongoose")

//schema
const studentSchema = new mongoose.Schema({
    name : String  ,
    age : Number
})

// go ahead and create correspanding in DB
const studentModel =mongoose.model("student" , studentSchema)
        
module.exports = studentModel;