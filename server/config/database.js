const mongoose= require("mongoose");
const {DB_URI} = require ("./constants");

mongoose
    .connect(DB_URI)
    .then(() =>{
        console.log("Connected to the Database successfully");
    })
    .catch((error) =>
        console.log('You failed connected to MongoDB ! : ', error)
    );