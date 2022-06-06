const express = require("express");
const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

const inputCheck = require("./utils/inputCheck");

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// route middleware
app.use("/api", apiRoutes);

// handle user requests that aren't supported by the app
app.use((req, res) => {
  res.status(404).end();
});

// hey, listen
db.connect((err) => {
  if (err) throw err;
  console.log("DB connected.");
  app.listen(PORT, () => {
    console.log(`Hey! Listen! on http://localhost:${PORT}`);
  });
});
