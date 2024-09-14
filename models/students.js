const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    image : {
        type : String,
        default : "https://media.istockphoto.com/id/673830534/photo/cute-baby-boy.jpg?s=1024x1024&w=is&k=20&c=e7QrwJkjLaD_rf9G5iiFXA964T0eeky8PMeM1k7pjyI=",
        set : (v) => v === "" ? "https://media.istockphoto.com/id/673830534/photo/cute-baby-boy.jpg?s=1024x1024&w=is&k=20&c=e7QrwJkjLaD_rf9G5iiFXA964T0eeky8PMeM1k7pjyI=" :  
        v,
        required : true,
    },
    name : String,
    last_name : String,
    DOB : {
        type : Date,
    },
    father_name : String,
    mother_name : String,
    s_phone : Number,
    p_phone : Number,

})

const students = mongoose.model("student" , studentSchema);

module.exports = students 