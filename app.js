const express = require("express");
const app = express();
const mongoose = require("mongoose");
const students = require("./models/students.js");
const path = require("path");
const ejs_mate = require("ejs-mate");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const wrapAsync = require("../Utils/wrapAsync.js");
const ExpressError = require("../Utils/ExpressError.js");
const {studentSchema} = require("./Schema.js");




//Connection To Database
const MONGO_URL = "mongodb://127.0.0.1:27017/Attendance";

main().then(() => {
    console.log("Connected to the database.");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.urlencoded({extended : true}));
app.engine("ejs" , ejs_mate);
app.use(express.static(path.join(__dirname , "/public")));
app.use(methodOverride('_method'));
app.use(bodyParser.json());



// All Students 
app.get("/home/allStd" , wrapAsync( async (req , res) => {
    const all_std = await students.find({});
    res.render("./student/allStd.ejs" , {all_std});
}));



//Viewing Single Student Details
app.get("/home/allStd/:id" , wrapAsync( async (req , res) => {
    const {id} = req.params; 
    const student = await students.findById(id);
    res.render("./student/viewStd.ejs" , {student});
}));


//Adding New Student
app.get("/home/new_std" , wrapAsync( async (req , res) => {
    res.render("./student/new_std.ejs");
}));

app.post("/home/new_std" , wrapAsync( async (req , res) => {
        
    let response = studentSchema.validate(req.body);
    console.log(response);
    let newStudent = new students(req.body.student);
    await newStudent.save();
    res.redirect("/home/allStd");
}));


//Edit Route
app.get("/home/allStd/:id/editStd" , wrapAsync ( async (req , res) => {
    let {id} = req.params;
    let student = await students.findById(id);
    res.render("./student/editStd.ejs" , {student});
}));


app.put("/home/allStd/:id" , wrapAsync( async (req , res) => {
    let {id} = req.params;
    let newStudent = req.body.student;
    if(!req.body.student){
        throw new ExpressError(400 , "Send Valid Data To Store!");
    }
    let student = await students.findByIdAndUpdate(id , {...newStudent});
    
    await student.save();
    res.redirect(`/home/allStd/${id}`);
}));


//Delete Route
app.delete("/home/allStd/:id/deleteStd" , wrapAsync( async (req , res) => {
    let {id} = req.params;

    let student = await students.findByIdAndDelete(id);
    res.redirect("/home/allStd");
}));



//Attendance Routes

//Creat Attendance
app.get("/home/take_attendance" , wrapAsync( async (req , res) => {
    const all_std = await students.find({});
    res.render("./Attendance/take_attendance.ejs" , {all_std});
}));


app.post('/home/take_attendance', (req, res) => {

    const Id = req.body.Id;
    const Absent = req.body.Absent;
    const Present = req.body.Present;
    const Checked = req.body.Checked;

    console.dir(Id);
    console.dir(Absent);
    console.dir(Present);
    console.dir(Checked);


});


//Home Route
app.get("/home" , (req , res) => {
    res.render("./student/home.ejs");
})

app.get("/" , (req , res) => {
    res.send("I Am The Root");
})


// app.get("/testing" , async (req , res) => {

//     console.log(req.body);
//     const student = new students({
//         name : "PK",
//         last_name : "Love",
//         DOB : new Date(),
//         father_name : "Prem",
//         mother_name : "Kirtu",
//         s_phone : 7349596022,
//         p_phone : 7349596022,
//     });

//     await student.save();
//     console.log(student);
//     res.send("Successful Testing");
// })

app.all("*" , (req , res , next) => {
    next(new ExpressError(404 , "Page Not Found!"));
});

app.use((err , req , res , next) => {
    let{statusCode=500 , message="Something Went Wrong!"} = err;
    res.status(statusCode).render("./student/error.ejs" , {message});
});

app.listen(8000 , () => {
    console.log("Server is listening to port 8000");
})