const express = require("express");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "PoC31Lark)",
    database: "election",
  },
  console.log("Connected to the election database.")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// route to handle user requests that aren't supported by the app
app.use((req, res) => {
  res.status(404).end();
});

// hey, listen
app.listen(PORT, () => {
  console.log(`Hey! Listen! on http://localhost:${PORT}`);
});
