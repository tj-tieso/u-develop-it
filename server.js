const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// route to handle user requests that aren't supported by the app
app.use((req, res) => {
  res.status(404).end();
});

// hey, listen
app.listen(PORT, () => {
  console.log(`Hey! Listen! on port ${PORT}`);
});
