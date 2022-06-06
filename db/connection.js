const mysql = require("mysql2");

// connect to db
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "PoC31Lark)",
    database: "election",
  },
  console.log("Connected to the election database.")
);

module.exports = db;
