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

const multer = require("multer");
const upload = multer({ dest: "./upload" });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM CUSTOMER", (err, rows, fields) => {
    res.send(rows);
  });
});

app.use("/image", express.static("./upload")); // /image 주소를 /upload 폴더와 맵핑한다

app.post("/api/customers", upload.single("image"), (req, res) => {
  //
  let image = "/image/" + req.file.filename;
  let name = req.body.name;
  let gender = req.body.gender;
  let age = req.body.age;
  let job = req.body.job;
  let params = [image, name, gender, age, job]; //*실제 db의 필드와 순서와 갯수가 일치해야한다
  connection.query(
    "INSERT INTO CUSTOMER VALUES (null,?,?,?,?,?)",
    params,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});
app.listen(port, () => console.log(`listening on port${port}`));
