const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 0,
      name: "1번여자",
      age: 19,
      gender: "female",
      img: "https://img.freepik.com/free-icon/user_318-563642.jpg?w=360",
      job: "student",
    },
    {
      id: 1,
      name: "2번여자",
      age: 32,
      gender: "female",
      img: "https://img.freepik.com/free-icon/user_318-563642.jpg?w=360",
      job: "student",
    },
    {
      id: 2,
      name: "3번남자",
      age: 52,
      gender: "male",
      img: "https://img.freepik.com/free-icon/user_318-563642.jpg?w=360",
      job: "student",
    },
  ]);
});

app.listen(port, () => console.log(`listening on port${port}`));
