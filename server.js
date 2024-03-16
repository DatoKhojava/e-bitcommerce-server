require("dotenv").config();
const express = require("express");
const app = express();

// DataBase imports
const checkConnection = require("./db");

// USE MIDDLEWARES
app.use(express.json());

// ROUTES

// app.listen(3000, function () {
//   console.log("Server is listening on port 3000");
// });

async function startServer() {
  try {
    const client = await checkConnection();

    app.listen(process.env.PORT || 3000, function () {
      console.log(`✅ Server is listening on port ${process.env.PORT || 3000}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
