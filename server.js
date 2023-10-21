const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("Database connected successfully".red.bold)
});

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`app is running on port: ${port}`.yellow.bold)
})