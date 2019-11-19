const express = require("express");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");

const fileupload = require("express-fileupload");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

//connect to Mongo
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(passport.initialize()); // passport middleware
app.use(cors());

require("./config/passport")(passport);

app.get("/", (req, res) => {
  res.send("Helllo");
}); // get route test

app.use(fileupload());
app.use("/api/users", users);
app.use("/api/admin", admin);
app.use("/api/profile", profile);

app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`success on port ${port}`));