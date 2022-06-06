const express = require("express");
const inputCheck = require("./utils/inputCheck");
const db = require("./db/connection");
const PORT = process.env.PORT || 3001;
const app = express();
//route requires
const apiRoutes = require("./routes/apiRoutes");

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
app.listen(PORT, () => {
  console.log(`Hey! Listen! on http://localhost:${PORT}`);
});
