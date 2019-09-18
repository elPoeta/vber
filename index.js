const express = require('express');
const app = express();
const { PORT } = require('./config/keys');

require("./startUp/mongodb")();

app.listen(PORT, error => {
  if (error) {
    console.log(`Error to start server ${error}`);
  }
  console.log(`Server started on port :: ${PORT}`);
})