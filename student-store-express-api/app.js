// Import dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const storeRouter = require("./routes/store");

// Instantiate server application
const app = express();

// Essential middleware
app.use(express.json());  
app.use(morgan("tiny"));
app.use(cors());
app.use("/store", storeRouter);

// Health endpoint
app.get("/",  (req, res, next) => {
    res.status(200).json({ping: "pong"})
})

module.exports = app;