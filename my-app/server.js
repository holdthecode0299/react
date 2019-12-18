// Dependencies 
// ************************************
require('dotenv').config();

const express = require("express");




// Starts express app
// ************************************
const app = express();


const PORT = process.env.PORT || 3001;

// Middleware 
// *************************
// Define Middleware here
// ************************************
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// app.use(express.json({limit: '50mb'}));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// app.use(express.static(path.join(__dirname, '..', 'public'))) 


// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    console.log(" TURBO!")
  });