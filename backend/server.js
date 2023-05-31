const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = 5000;
const hostname = "127.0.0.1";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

app.listen(port, () => {
  console.log(`Le serveur a démarré au port http://${hostname}:${port}`);
});
