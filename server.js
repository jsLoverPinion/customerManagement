const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const data = fs.readFileSync("./database.json");
const confing = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: confing.host,
  user: confing.user,
  password: confing.password,
  port: confing.port,
  database: confing.database,
});

connection.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM CUSTOMER", (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => console.log(`listening on port${port}`));
