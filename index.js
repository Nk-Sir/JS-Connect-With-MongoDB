const mongoose = require("mongoose")
const studentModel = require("./models/student.model1")

/**
 * write the code to connect with mingoDB
 */
mongoose.connect("mongodb://localhost/be_demodb") //where to connect

//start the connection with mongodb
const db = mongoose.connection // start the connection with mongodb


//if the error to connect with mongodb or not error
db.once("open" , ()=>{
    console.log("connection mongobd")
    // logic to insert data into the DB
    init()

    //running the  queries on mongodb
    dbquries()
})

db.on("error" , ()=>{
    console.log("error connection of DB")
});

 async function init(){
// logic to insert data in the DB
    const student ={
     name : "nabeel",
     age : 99 ,
     email : "nabeelkhan@gmail.com" ,
     subject : ["maths" , "english"]
    }
    const std_obj = await studentModel.create(student)
    console.log(std_obj)
}
 
// find to id number

async function dbquries(){


//   // reaf the sstudent 
// console.log("inside the mongodb function")
//   // read the student data based on the id
//  try{
//     const student = await studentModel.findById("6686882e8d50b0d86c3b4232")
//  }catch(err){
//     console.log(err)
//  }
// }



// l want to go and search based
// try{
//     const student = await studentModel.find({name : "nabeel"})
//     console.log(student)
// }catch{
//     console.log("err")
//     }



/**
 * deal with the multiple conditions
 */
// const students =await studentModel.where("age").gt("10").where("name").equals("nabeel").limit(2)
// console.log(students)


/**
 * delete one doument were name is name
 */
const students=await studentModel.deleteOne({_id:"668401367f106d45500101e0"})
console.log(students)
}


