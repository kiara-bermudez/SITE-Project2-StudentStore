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



/* Generic error handler - anything that is unhandled will be handled here */
app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
  
    return res.status(status).json({
      error: { message, status },
    })
  })

module.exports = app;