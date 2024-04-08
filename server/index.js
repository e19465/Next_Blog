const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const corsOptions = require("./config/corsOptions");
dotenv.config();

// define port
const PORT = process.env.PORT || 5000;

// middleware for cors
app.use(cors(corsOptions));

// Parse URL-encoded bodies (HTML form data)
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json()
app.use(express.json());

// Serve static files from the "static" directory
app.use(express.static(path.join(__dirname, "static")));

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
////////////////////////////////

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

//! user auth routes
app.use("/api/", require("./routes/auth/auth"));

//! user other routes
app.use("/api/", require("./routes/user/user"));

// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
//     res.status(400).json({ error: "Invalid JSON payload" });
//   } else if (err.type === "entity.too.large") {
//     // console.log("x");
//     res.status(413).json({ error: "Image is too large" });
//   } else {
//     next();
//   }
// });

app.all("/*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "static", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// app listening to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
