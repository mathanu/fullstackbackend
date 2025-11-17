const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com", 
  port:4000,  // or your cloud DB host
  user: "3Ls3a3FkGUzqFUE.root",        // your MySQL username
  password: " ",// your MySQL password
  database: "testdb"   // your database name
});

// Simple API route
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
