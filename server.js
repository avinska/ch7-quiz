require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./models");
const router = require("./router");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(router);

const PORT = process.env.PORT || 5000;

db.sequelize
  .sync({
    // force: true //utk sync force db subs migration, bakal apus smua data, boleh kalo di dev/staging
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("================================");
      console.log(`server berjalan di port ${PORT}`);
      console.log("================================");
    });
  })
  .catch((err) => {
    console.log(err);
  });
