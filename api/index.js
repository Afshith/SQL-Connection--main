const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: 'student',
  });

app.use(cors());


app.get("/info", (req , res) => {
    const q = "SELECT * FROM student_info;";
    db.query(q, (err, data) => {
        if (err) {
          console.log(err);
          return res.json(err);
        }
        console.log(data);
        return res.json(data);
      });
})



app.get("/test" , (req , res) => {
    console.log("test");
    res.send("test")
})





app.listen(5000 , ()=>{
    console.log("server started");
})

