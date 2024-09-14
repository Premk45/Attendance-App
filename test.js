const express = require("express");
const app = express();
const mongoose = require("mongoose");
const test = require("./models/test");
const path = require("path");
const ejs_mate = require("ejs-mate");



//Connection To Database
const MONGO_URL = "mongodb://127.0.0.1:27017/dateTest";

main().then(() => {
    console.log("Connected to the database.");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}


// Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine" , "ejs");
app.use(express.urlencoded({extended : true}));
app.engine("ejs" , ejs_mate);
app.use(express.static(path.join(__dirname , "/public")));

// Routes
app.get('/', (req, res) => {
  res.render("./student/form.ejs");
});

app.post('/submit', async (req, res) => {
  const { name, dateOfBirth } = req.body;


  try {
    let newUser = new test({
      name : name,
      dateOfBirth: new Date(dateOfBirth), // Convert date string to Date object
    });

    const formatDate = newUser.dateOfBirth.toLocaleDateString('en-US'); // Example format: MM/DD/YYYY
    newUser.dateOfBirth =  formatDate;
    console.log(newUser);

    await newUser.save();
    res.send('User saved successfully!');
    console.log(newUser);
  } catch (err) {
    res.status(500).send('Error saving user: ' + err.message);
  }
});


app.listen("3000" , () => {
    console.log("app is listening......");
});


