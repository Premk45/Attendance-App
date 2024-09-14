const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name : String,
    dateOfBirth: {
        type: Date,
        required: true,
      }
});


const test = mongoose.model("test" , userSchema);
module.exports = test;
