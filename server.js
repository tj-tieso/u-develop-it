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

// database call 12.2/4
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });

// request single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// Delete candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// create a new candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//             VALUES (?,?,?,?)`;

// const params = [1, "Ronald", "Firbank", 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// route to handle user requests that aren't supported by the app
app.use((req, res) => {
  res.status(404).end();
});

// hey, listen
app.listen(PORT, () => {
  console.log(`Hey! Listen! on http://localhost:${PORT}`);
});
