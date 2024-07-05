const mongoose = require("mongoose")

const studentschema = new mongoose.Schema({
    name :{
        type : String ,
        require : true 
    },
    age : {
        type : Number ,
        min : 19

    },
    email :{
        type : String ,
        require : true ,
        lowercase : true,
    },
    subject :[String],
    // createAt :{
    //     type : Date,
    //     immutable :true,
    //     default :() =>{
    //         return Date.now()
    //     }
    // }

},{versionKey : false , timestamps : true})

const studentModel = mongoose.model("student" , studentschema
)
module.exports = studentModel