const mongoose = require("mongoose");
const initData = require("./data.js");
const students = require("../models/students.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Attendance";

main().then(() => {
    console.log("Connected to the database.");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await students.deleteMany({});
    await students.insertMany(initData.data);
    console.log("data is initialized Successfully.");
}

initDB();